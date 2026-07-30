import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { staggerItem } from '../../utils/animations';

interface AnimatedChipProps {
  children: ReactNode;
  className?: string;
}

const AnimatedChip: React.FC<AnimatedChipProps> = ({ children, className = '', ...props }) => {
  return (
    <motion.span
      className={`chip ${className}`}
      variants={staggerItem}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedChip;