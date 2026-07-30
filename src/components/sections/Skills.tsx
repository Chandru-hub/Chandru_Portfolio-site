import React from 'react';
import { motion } from 'framer-motion';
import SkillChip from '../common/SkillChip';
import TechIcon from '../common/TechIcon';
import { useAppSelector } from '../../store/hooks';
import { FEATURED_SKILL_ICONS } from '../../utils/skillIcons';
import { staggerContainer } from '../../utils/animations';

const Skills: React.FC = () => {
  const skillsData = useAppSelector((state) => state.portfolio.skills);

  return (
    <section id="skills" className="section">
      <div className="section-head">
        <p className="section-kicker">Capabilities</p>
        <h2 className="section-display">Technical skills</h2>
        <span className="section-accent-line" aria-hidden="true" />
      </div>

      <motion.div
        className="featured-icons"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        {FEATURED_SKILL_ICONS.map((item) => (
          <motion.div
            key={item.label}
            className="featured-icon-item"
            whileHover={{ y: -4, scale: 1.04 }}
            title={item.label}
          >
            <span className="featured-icon-media">
              <TechIcon src={item.src} label={item.label} size={36} />
            </span>
            <span className="featured-icon-label">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="skills-grid skills-grid--full">
        {skillsData.map((group, idx) => (
          <motion.div
            key={group.category}
            className="skill-panel"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04, duration: 0.4 }}
          >
            <h3 className="skill-category">{group.category}</h3>
            <motion.div
              className="chip-list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {group.items.map((skill) => (
                <SkillChip key={skill} label={skill} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
