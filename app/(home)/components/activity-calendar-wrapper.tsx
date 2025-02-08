'use client';

import tailwind from '@julian-at/lib/tailwind';
import { useTheme } from 'next-themes';
import ActivityCalendar, { type Activity } from 'rsc-activity-calendar';

interface ActivityCalendarWrapperProps {
  data: Activity[];
}

const ActivityCalendarWrapper = ({
  data,
}: ActivityCalendarWrapperProps) => {
  const { theme } = useTheme();

  if (!theme) return null;

  return (
    <ActivityCalendar
      hideColorLegend
      hideTotalCount
      hideMonthLabels
      data={data}
      colorScheme={theme as 'light' | 'dark'}
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
    />
  );
};

export default ActivityCalendarWrapper;
