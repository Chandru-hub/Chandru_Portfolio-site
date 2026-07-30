import React from 'react';
import { motion } from 'framer-motion';
import { FOOTER_TEXT } from '../../utils/constants';
import { fadeInUp } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="footer-small"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <i className="fas fa-code"></i> {FOOTER_TEXT}
    </motion.div>
  );
};

export default Footer;