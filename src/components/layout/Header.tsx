import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_NAME } from '../../utils/constants';
import ThemeToggle from '../common/ThemeToggle';
import { fadeInUp } from '../../utils/animations';

const Header: React.FC = () => {
  return (
    <motion.div
      className="header-bar"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.span className="brand" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <i className="fas fa-terminal" style={{ marginRight: '0.5rem' }}></i>
        {BRAND_NAME}
      </motion.span>
      <ThemeToggle />
    </motion.div>
  );
};

export default Header;