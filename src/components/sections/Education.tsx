import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from '../common/AnimatedCard';
import SectionTitle from '../common/SectionTitle';
import educationData from '../../data/educationData';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Education: React.FC = () => {
  return (
    <AnimatedCard delay={0.2}>
      <SectionTitle icon="fas fa-graduation-cap">Education</SectionTitle>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        {educationData.map((edu, idx) => (
          <motion.div className="edu-item" key={idx} variants={staggerItem} whileHover={{ x: 5 }}>
            <span><strong>{edu.degree}</strong> · {edu.institution}</span>
            <span>{edu.period}</span>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedCard>
  );
};

export default Education;