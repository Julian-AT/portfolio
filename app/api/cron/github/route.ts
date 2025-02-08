import { parseError } from '@julian-at/lib/utils';
import { updateEdgeConfig } from '@julian-at/lib/vercel';
import { endOfWeek, subDays, subWeeks } from 'date-fns';
import ky from 'ky';
import type { Activity } from 'rsc-activity-calendar';

export type GitHubProperties = {
  total: number;
  data: Activity[];
};

type GitHubContributionsApiResponse = {
  contributions: Activity[];
};

export const maxDuration = 300;
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export const GET = async (): Promise<Response> => {
  try {
    const today = endOfWeek(subWeeks(new Date(), 1));
    const oneYearAgo = subDays(today, 365);
    const twoYearsAgo = subDays(today, 1092);

    const response = await ky
      .get<GitHubContributionsApiResponse>(
        'https://github-contributions-api.jogruber.de/v4/julian-at'
      )
      .json();

    if (!response.contributions.length) {
      throw new Error('No contributions found');
    }

    // Convert dates to timestamps once to avoid repeated Date object creation
    const todayTs = today.getTime();
    const oneYearAgoTs = oneYearAgo.getTime();
    const twoYearsAgoTs = twoYearsAgo.getTime();

    // Pre-process contributions to avoid repeated date parsing
    const processedContributions = response.contributions.map(({ date, count, color, intensity }) => ({
      date,
      count,
      color,
      intensity,
      ts: new Date(date).getTime()
    }));

    const content: GitHubProperties = {
      data: processedContributions
        .filter(({ ts }) => ts <= todayTs && ts >= twoYearsAgoTs)
        .filter(({ count }) => count > 0)
        .map(({ date, count, color, intensity }) => ({ 
          date, 
          count,
          color,
          intensity 
        }))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
      total: processedContributions.reduce(
        (total, { ts, count }) =>
          ts >= oneYearAgoTs && ts <= todayTs ? total + count : total,
        0
      ),
    };

    console.log("content size (kb):", JSON.stringify(content).length / 1024);
    
    

    await updateEdgeConfig('github', content);

    return new Response(undefined, { status: 204 });
  } catch (error) {
    const message = parseError(error);

    return new Response(message, { status: 500 });
  }
};
