import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from '../common/AnimatedCard';
import SectionTitle from '../common/SectionTitle';
import experienceData from '../../data/experienceData';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Experience: React.FC = () => {
  return (
    <AnimatedCard delay={0.2}>
      <SectionTitle icon="fas fa-briefcase">Experience</SectionTitle>
      {experienceData.map((exp) => (
        <motion.div key={exp.id} className="exp-item" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div className="exp-header" variants={staggerContainer}>
            <motion.h3 variants={staggerItem}>
              {exp.title} <span className="company">{exp.company}</span>
            </motion.h3>
            <motion.span className="exp-date" variants={staggerItem}>{exp.period}</motion.span>
          </motion.div>
          <motion.div className="exp-desc" variants={staggerContainer}>
            <motion.em variants={staggerItem}>{exp.description}</motion.em>
            <motion.ul variants={staggerContainer}>
              {exp.achievements.map((achievement, index) => (
                <motion.li key={index} variants={staggerItem} whileHover={{ x: 5 }}>
                  {achievement}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      ))}
    </AnimatedCard>
  );
};

export default Experience;