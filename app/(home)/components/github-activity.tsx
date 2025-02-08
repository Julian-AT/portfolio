import type { GitHubProperties } from '@julian-at/app/api/cron/github/route';
import { Section } from '@julian-at/components/section';
import { social } from '@julian-at/lib/social';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import { get } from '@vercel/edge-config';
import ActivityCalendar from 'rsc-activity-calendar';
import tailwind from '@julian-at/lib/tailwind';

export const GitHubActivity = async () => {
  const github = await get<GitHubProperties>('github');
  if (!github) {
    return null;
  }

  const dateMap = new Map(github.data.map(entry => [entry.date, entry]));

  const startDate = new Date(github.data[0].date);
  const endDate = new Date(github.data[github.data.length - 1].date);
  const allDates: typeof github.data = [];

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    const existingEntry = dateMap.get(dateStr);
    
    if (existingEntry) {
      allDates.push(existingEntry);
    } else {
      allDates.push({
        date: dateStr,
        count: 0,
        level: 0
      });
    }
  }

  const processedData = allDates.map(entry => {
    let level: 0 | 1 | 2 | 3;
    if (entry.count >= 10) {
      level = 3;
    } else if (entry.count >= 6) {
      level = 2;
    } else if (entry.count >= 2) {
      level = 1;
    } else {
      level = 0;
    }
    return {
      ...entry,
      level
    };
  });


  github.data = processedData;


  const quarterLength = Math.floor(github.data.length / 4);
  const firstQuarterData = github.data.slice(0, quarterLength);
  const secondQuarterData = github.data.slice(quarterLength, quarterLength * 2);
  const thirdQuarterData = github.data.slice(
    quarterLength * 2,
    quarterLength * 3
  );
  const fourthQuarterData = github.data.slice(quarterLength * 3);

  return (
    <Section>
      <ViewAnimation
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative grid gap-0.5 sm:grid-cols-2 sm:gap-[3px] sm:p-8 lg:gap-1"
      >
        {[
          thirdQuarterData,
          fourthQuarterData,
          firstQuarterData,
          secondQuarterData,
        ].map((data, index) => (
          <ActivityCalendar
          key={index}
          hideColorLegend
          hideTotalCount
          hideMonthLabels
          data={data}
          theme={{
            light: [
              tailwind.theme.colors.neutral[200],
              tailwind.theme.colors.green[200],
              tailwind.theme.colors.green[400],
              tailwind.theme.colors.green[600],
              tailwind.theme.colors.green[800],
            ],
            dark: [
              tailwind.theme.colors.neutral[800],
              tailwind.theme.colors.green[400],
              tailwind.theme.colors.green[500],
              tailwind.theme.colors.green[600],
              tailwind.theme.colors.green[800],
            ],
          }}
        />        ))}
        <div className="absolute right-0 bottom-0 left-0 z-10 h-full bg-gradient-to-b from-transparent to-backdrop sm:bottom-8 sm:h-40" />
        <a
          className="-translate-x-1/2 absolute bottom-4 left-1/2 z-10 whitespace-nowrap font-mono text-muted-foreground text-xs"
          href={social.github.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {github.total} contributions in the last year
        </a>
      </ViewAnimation>
    </Section>
  );
};
