import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_NAME } from '../../utils/constants';
import ThemeToggle from '../common/ThemeToggle';
import { fadeInUp, springTransition } from '../../utils/animations';

const Header: React.FC = () => {
  return (
    <motion.header
      className="header-bar"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.span
        className="brand"
        whileHover={{ scale: 1.06, rotate: -1 }}
        whileTap={{ scale: 0.96 }}
        transition={springTransition}
      >
        <motion.i
          className="fas fa-terminal"
          style={{ marginRight: '0.5rem' }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {BRAND_NAME}
      </motion.span>
      <ThemeToggle />
    </motion.header>
  );
};

export default Header;
