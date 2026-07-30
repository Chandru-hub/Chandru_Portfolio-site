import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from '../common/AnimatedCard';
import AnimatedChip from '../common/AnimatedChip';
import SectionTitle from '../common/SectionTitle';
import skillsData from '../../data/skillsData';
import { staggerContainer } from '../../utils/animations';

const Skills: React.FC = () => {
  return (
    <AnimatedCard delay={0.3}>
      <SectionTitle icon="fas fa-code">Technical Skills</SectionTitle>
      {skillsData.map((group, idx) => (
        <motion.div key={idx} className="skill-group" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h4>{group.category}</motion.h4>
          <motion.div className="chip-list" variants={staggerContainer}>
            {group.items.map((skill, i) => (
              <AnimatedChip key={i}>{skill}</AnimatedChip>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </AnimatedCard>
  );
};

export default Skills;