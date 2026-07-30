import React from 'react';
import { motion } from 'framer-motion';
import { useAppSelector } from '../../store/hooks';
import { listReveal, listItem } from '../../utils/animations';

const Experience: React.FC = () => {
  const experienceData = useAppSelector((state) => state.portfolio.experience);

  return (
    <section id="experience" className="section">
      <div className="section-head">
        <p className="section-kicker">Work history</p>
        <h2 className="section-display">Professional experience</h2>
      </div>

      <motion.ol
        className="timeline"
        variants={listReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {experienceData.map((exp) => (
          <motion.li key={exp.id} className="timeline-item" variants={listItem}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-heading">{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <span className="exp-date">{exp.period}</span>
              </div>
              <p className="exp-focus">{exp.description}</p>
              <ul className="exp-points">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
};

export default Experience;
