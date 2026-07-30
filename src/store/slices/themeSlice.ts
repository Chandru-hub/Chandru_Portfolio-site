import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeMode, ThemeState } from '../../types';
import { getTimeBasedTheme } from '../../utils/timeTheme';

const THEME_ORDER: ThemeMode[] = ['light', 'dark', 'neon', 'forest', 'ocean'];
const AUTO_KEY = 'portfolio-theme-auto';
const THEME_KEY = 'portfolio-theme';

const resolveInitial = (): ThemeState => {
  const timed = getTimeBasedTheme();

  if (typeof window === 'undefined') {
    return { mode: timed.theme, autoTime: true, timeOfDay: timed.timeOfDay };
  }

  const autoStored = localStorage.getItem(AUTO_KEY);
  const autoTime = autoStored === null ? true : autoStored === 'true';
  const stored = localStorage.getItem(THEME_KEY) as ThemeMode | null;

  if (autoTime) {
    return { mode: timed.theme, autoTime: true, timeOfDay: timed.timeOfDay };
  }

  return {
    mode: stored && THEME_ORDER.includes(stored) ? stored : timed.theme,
    autoTime: false,
    timeOfDay: timed.timeOfDay,
  };
};

const persist = (mode: ThemeMode, autoTime: boolean) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_KEY, mode);
  localStorage.setItem(AUTO_KEY, String(autoTime));
};

const initialState: ThemeState = resolveInitial();

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      state.autoTime = false;
      persist(action.payload, false);
    },
    setAutoTime(state, action: PayloadAction<boolean>) {
      state.autoTime = action.payload;
      if (action.payload) {
        const timed = getTimeBasedTheme();
        state.mode = timed.theme;
        state.timeOfDay = timed.timeOfDay;
        persist(timed.theme, true);
      } else {
        persist(state.mode, false);
      }
    },
    syncTimeTheme(state) {
      const timed = getTimeBasedTheme();
      state.timeOfDay = timed.timeOfDay;
      if (state.autoTime) {
        state.mode = timed.theme;
        persist(timed.theme, true);
      }
    },
    toggleTheme(state) {
      // Cycle: Auto → Light → Dark → Neon → Forest → Ocean → Auto…
      if (state.autoTime) {
        state.autoTime = false;
        state.mode = 'light';
        persist('light', false);
        return;
      }

      const currentIndex = THEME_ORDER.indexOf(state.mode);
      if (currentIndex === THEME_ORDER.length - 1) {
        const timed = getTimeBasedTheme();
        state.autoTime = true;
        state.mode = timed.theme;
        state.timeOfDay = timed.timeOfDay;
        persist(timed.theme, true);
        return;
      }

      const next = THEME_ORDER[currentIndex + 1];
      state.mode = next;
      persist(next, false);
    },
  },
});

export const { setTheme, setAutoTime, syncTimeTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
