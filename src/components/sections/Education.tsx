import React from 'react';
import { motion } from 'framer-motion';
import { useAppSelector } from '../../store/hooks';
import { listReveal, listItem } from '../../utils/animations';

const Education: React.FC = () => {
  const educationData = useAppSelector((state) => state.portfolio.education);

  return (
    <section id="education" className="section">
      <div className="section-head">
        <p className="section-kicker">Academic journey</p>
        <h2 className="section-display">Education</h2>
      </div>

      <motion.div
        className="edu-list"
        variants={listReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {educationData.map((edu, idx) => (
          <motion.div className="edu-row" key={idx} variants={listItem}>
            <span className="edu-period">{edu.period}</span>
            <div>
              <h3 className="edu-heading">{edu.degree}</h3>
              <p className="edu-meta">{edu.institution}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
