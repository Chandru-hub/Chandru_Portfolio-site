import React from 'react';
import { motion } from 'framer-motion';
import { getSkillIcon } from '../../utils/skillIcons';
import { chipPop } from '../../utils/animations';
import TechIcon from './TechIcon';

interface SkillChipProps {
  label: string;
}

/** Skill pill with tech logo + vertically centered label. */
const SkillChip: React.FC<SkillChipProps> = ({ label }) => {
  const icon = getSkillIcon(label);

  return (
    <motion.span
      className="chip skill-chip"
      variants={chipPop}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <TechIcon src={icon} label={label} size={16} />
      <span className="skill-chip-label">{label}</span>
    </motion.span>
  );
};

export default SkillChip;
