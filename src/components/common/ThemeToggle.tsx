import React from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { setTheme, setAutoTime } from '../../store/slices/themeSlice';
import { useAppDispatch } from '../../store/hooks';
import { useTheme } from '../../hooks/useTheme';
import { ThemeMode } from '../../types';
import { springTransition, softSpring } from '../../utils/animations';

const TIME_LABELS: Record<string, string> = {
  morning: 'Morning',
  afternoon: 'Afternoon',
  evening: 'Evening',
  night: 'Night',
};

const THEMES: { id: ThemeMode; icon: string; label: string }[] = [
  { id: 'light', icon: 'fa-sun', label: 'Light' },
  { id: 'dark', icon: 'fa-moon', label: 'Dark' },
  { id: 'neon', icon: 'fa-bolt', label: 'Neon' },
  { id: 'forest', icon: 'fa-tree', label: 'Forest' },
  { id: 'ocean', icon: 'fa-water', label: 'Ocean' },
];

const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mode, autoTime, timeOfDay } = useTheme();

  const timeIcon =
    timeOfDay === 'morning'
      ? 'fa-sun'
      : timeOfDay === 'afternoon'
        ? 'fa-cloud-sun'
        : timeOfDay === 'evening'
          ? 'fa-cloud-moon'
          : 'fa-moon';

  return (
    <LayoutGroup>
      <motion.div
        className="theme-controls"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={softSpring}
      >
        <motion.button
          type="button"
          className={`theme-auto-btn${autoTime ? ' is-active' : ''}`}
          onClick={() => dispatch(setAutoTime(!autoTime))}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={springTransition}
          title={
            autoTime
              ? `Time theme on (${TIME_LABELS[timeOfDay]} → ${mode}). Click for manual.`
              : 'Enable theme by time of day'
          }
          aria-pressed={autoTime}
        >
          <motion.i
            key={autoTime ? timeOfDay : 'manual'}
            className={`fas ${autoTime ? timeIcon : 'fa-clock'}`}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={springTransition}
          />
          <span>
            {autoTime ? `Auto · ${TIME_LABELS[timeOfDay]}` : 'Auto time'}
          </span>
          <AnimatePresence>
            {autoTime && (
              <motion.span
                className="theme-auto-dot"
                layoutId="auto-dot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              />
            )}
          </AnimatePresence>
        </motion.button>

        <motion.div
          className="theme-manual-group"
          role="group"
          aria-label="Manual theme"
          animate={{ opacity: autoTime ? 0.55 : 1 }}
          transition={{ duration: 0.25 }}
        >
          {THEMES.map((theme) => {
            const active = !autoTime && mode === theme.id;
            return (
              <motion.button
                key={theme.id}
                type="button"
                className={`theme-chip${active ? ' is-active' : ''}`}
                onClick={() => dispatch(setTheme(theme.id))}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={springTransition}
                title={`Manual: ${theme.label}`}
                aria-pressed={active}
                aria-label={`${theme.label} theme`}
              >
                {active && (
                  <motion.span
                    className="theme-chip-glow"
                    layoutId="theme-active"
                    transition={springTransition}
                  />
                )}
                <i className={`fas ${theme.icon}`} />
                <span className="theme-chip-label">{theme.label}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
};

export default ThemeToggle;
