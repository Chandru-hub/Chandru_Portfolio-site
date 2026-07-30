import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionTitleProps {
  icon?: string;
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon, children }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.h2
      ref={ref}
      className="section-title"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInLeft}
    >
      {icon && <i className={icon}></i>}
      {children}
    </motion.h2>
  );
};

export default SectionTitle;