"use server";

import { parseError } from "@julian-at/lib/utils";
import { updateEdgeConfig } from "@julian-at/lib/vercel";
import { endOfWeek, subDays, subWeeks } from "date-fns";
import ky from "ky";
import type { Activity } from "rsc-activity-calendar";

export type GitHubProperties = {
  total: number;
  data: Activity[];
};

type GitHubContributionsApiResponse = {
  contributions: Activity[];
  total: Record<string, number>;
};

export async function getGithubActivity(): Promise<{
  success: boolean;
  data?: Activity[];
  total?: number;
  error?: string;
}> {
  try {
    const today = endOfWeek(subWeeks(new Date(), 1));
    const oneYearAgo = subDays(today, 365);
    const twoYearsAgo = subDays(today, 1092);

    const response = await ky
      .get<GitHubContributionsApiResponse>(
        "https://github-contributions-api.jogruber.de/v4/julian-at"
      )
      .json();

    if (!response.contributions.length) {
      throw new Error("No contributions found");
    }

    const content: GitHubProperties = {
      data: response.contributions
        .filter(({ date }) => {
          const dateObj = new Date(date);
          return dateObj <= today && dateObj >= twoYearsAgo;
        })
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        ),
      total: response.contributions.reduce(
        (total, { date, count }) =>
          new Date(date) >= oneYearAgo && new Date(date) <= today
            ? total + count
            : total,
        0
      ),
    };

    return { success: true, ...content };
  } catch (error) {
    const message = parseError(error);
    return { success: false, error: message };
  }
}
