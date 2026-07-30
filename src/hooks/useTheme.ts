import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { syncTimeTheme } from '../store/slices/themeSlice';
import { ThemeMode, TimeOfDay } from '../types';
import { msUntilNextPeriod } from '../utils/timeTheme';

export interface UseThemeResult {
  mode: ThemeMode;
  autoTime: boolean;
  timeOfDay: TimeOfDay;
}

/**
 * Applies theme to the DOM and keeps auto-time themes in sync with the clock.
 */
export const useTheme = (): UseThemeResult => {
  const dispatch = useAppDispatch();
  const { mode, autoTime, timeOfDay } = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    document.documentElement.setAttribute('data-time-of-day', timeOfDay);
    document.documentElement.setAttribute('data-theme-auto', String(autoTime));
  }, [mode, timeOfDay, autoTime]);

  useEffect(() => {
    dispatch(syncTimeTheme());

    let timerId: number;

    const schedule = () => {
      const delay = msUntilNextPeriod();
      timerId = window.setTimeout(() => {
        dispatch(syncTimeTheme());
        schedule();
      }, delay);
    };

    schedule();

    // Also re-check when the tab becomes visible again (laptop wake, etc.)
    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        dispatch(syncTimeTheme());
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [dispatch]);

  return { mode, autoTime, timeOfDay };
};
