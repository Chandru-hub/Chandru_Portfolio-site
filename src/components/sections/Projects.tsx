import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from '../common/AnimatedCard';
import SectionTitle from '../common/SectionTitle';
import projectsData from '../../data/projectsData';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Projects: React.FC = () => {
  return (
    <AnimatedCard delay={0.3}>
      <SectionTitle icon="fas fa-flask">Academic Projects</SectionTitle>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        {projectsData.map((project) => (
          <motion.div key={project.id} className="project-item" variants={staggerItem} whileHover={{ x: 5, scale: 1.02 }}>
            <strong>{project.title}</strong> — {project.description}
          </motion.div>
        ))}
      </motion.div>
    </AnimatedCard>
  );
};

export default Projects;