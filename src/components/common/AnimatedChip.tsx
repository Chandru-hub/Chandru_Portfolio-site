import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { chipPop } from '../../utils/animations';

interface AnimatedChipProps {
  children: ReactNode;
  className?: string;
}

const AnimatedChip: React.FC<AnimatedChipProps> = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`chip ${className}`}
      variants={chipPop}
      whileHover={{ scale: 1.1, y: -3, rotate: -2 }}
      whileTap={{ scale: 0.92 }}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedChip;
