import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from '../common/AnimatedCard';
import SectionTitle from '../common/SectionTitle';
import certificationsData from '../../data/certificationsData';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Certifications: React.FC = () => {
  return (
    <AnimatedCard delay={0.4}>
      <SectionTitle icon="fas fa-certificate">Certifications & Learning</SectionTitle>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        {certificationsData.map((cert) => (
          <motion.div key={cert.id} variants={staggerItem} whileHover={{ x: 5 }}>
            <motion.span className="cert-badge" whileHover={{ scale: 1.05 }}>
              {cert.icon && <i className={cert.icon}></i>} {cert.name}
            </motion.span>
            {cert.title}
            {cert.year && ` (${cert.year})`}
          </motion.div>
        ))}
      </motion.div>
    </AnimatedCard>
  );
};

export default Certifications;