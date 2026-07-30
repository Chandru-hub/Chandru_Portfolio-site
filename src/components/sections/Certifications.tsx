import React from 'react';
import { motion } from 'framer-motion';
import { useAppSelector } from '../../store/hooks';
import { listReveal, listItem } from '../../utils/animations';

const Certifications: React.FC = () => {
  const certificationsData = useAppSelector((state) => state.portfolio.certifications);

  return (
    <section id="certifications" className="section">
      <div className="section-head">
        <p className="section-kicker">Credentials</p>
        <h2 className="section-display">Certifications & learning</h2>
      </div>

      <motion.div
        className="cert-grid"
        variants={listReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificationsData.map((cert) => (
          <motion.article key={cert.id} className="cert-card" variants={listItem}>
            <span className="cert-badge">
              {cert.icon && <i className={cert.icon} />} {cert.name}
            </span>
            <h3 className="cert-heading">
              {cert.title}
              {cert.year ? ` (${cert.year})` : ''}
            </h3>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
