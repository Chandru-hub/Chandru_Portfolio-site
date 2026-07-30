import React from 'react';
import { motion } from 'framer-motion';
import { FOOTER_TEXT } from '../../utils/constants';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="footer-small"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <i className="fas fa-code" /> {FOOTER_TEXT}
    </motion.footer>
  );
};

export default Footer;
