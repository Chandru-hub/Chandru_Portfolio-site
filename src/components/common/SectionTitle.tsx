import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { springTransition } from '../../utils/animations';

interface SectionTitleProps {
  icon?: string;
  children: ReactNode;
}

/** Section headings always render visible (parent card handles scroll reveal). */
const SectionTitle: React.FC<SectionTitleProps> = ({ icon, children }) => {
  return (
    <div className="section-title-wrap">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {icon && (
          <motion.i
            className={icon}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: [0, -10, 0] }}
            transition={{ duration: 0.55, delay: 0.1 }}
          />
        )}
        <span>{children}</span>
      </motion.h2>
      <motion.span
        className="section-underline"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        style={{ originX: 0 }}
        transition={springTransition}
      />
    </div>
  );
};

export default SectionTitle;
