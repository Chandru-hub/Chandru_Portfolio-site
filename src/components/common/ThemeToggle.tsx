import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import { useTheme } from '../../hooks/useTheme';
import { springTransition } from '../../utils/animations';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={() => dispatch(toggleTheme())}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={springTransition}
    >
      <motion.i
        key={mode}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={springTransition}
        className={mode === 'light' ? 'fas fa-moon' : 'fas fa-sun'}
      ></motion.i>
      {mode === 'light' ? 'Dark mode' : 'Light mode'}
    </motion.button>
  );
};

export default ThemeToggle;