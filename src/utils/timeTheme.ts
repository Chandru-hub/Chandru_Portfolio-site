import { ThemeMode, TimeOfDay } from '../types';

export interface TimeThemeResult {
  timeOfDay: TimeOfDay;
  theme: ThemeMode;
  label: string;
}

/**
 * Maps local clock to theme:
 * morning  → light
 * afternoon → ocean
 * evening  → forest
 * night    → dark
 */
export function getTimeOfDay(date: Date = new Date()): TimeOfDay {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 20) return 'evening';
  return 'night';
}

export function getThemeForTimeOfDay(timeOfDay: TimeOfDay): ThemeMode {
  switch (timeOfDay) {
    case 'morning':
      return 'light';
    case 'afternoon':
      return 'ocean';
    case 'evening':
      return 'forest';
    case 'night':
      return 'dark';
    default:
      return 'light';
  }
}

export function getTimeBasedTheme(date: Date = new Date()): TimeThemeResult {
  const timeOfDay = getTimeOfDay(date);
  const theme = getThemeForTimeOfDay(timeOfDay);
  const labels: Record<TimeOfDay, string> = {
    morning: 'Morning',
    afternoon: 'Afternoon',
    evening: 'Evening',
    night: 'Night',
  };

  return {
    timeOfDay,
    theme,
    label: labels[timeOfDay],
  };
}

/** Milliseconds until the next time-of-day boundary. */
export function msUntilNextPeriod(date: Date = new Date()): number {
  const hour = date.getHours();
  const boundaries = [5, 12, 17, 20, 29]; // 29 = 5am next day (24+5)
  const nextBoundary = boundaries.find((b) => hour < b) ?? 29;
  const targetHour = nextBoundary >= 24 ? nextBoundary - 24 : nextBoundary;

  const next = new Date(date);
  next.setSeconds(0, 0);
  next.setMinutes(0);

  if (nextBoundary >= 24) {
    next.setDate(next.getDate() + 1);
    next.setHours(targetHour);
  } else {
    next.setHours(targetHour);
  }

  return Math.max(next.getTime() - date.getTime(), 60_000);
}
