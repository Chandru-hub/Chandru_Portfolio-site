import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '6+', label: 'Years building' },
  { value: '20+', label: 'Tools & platforms' },
  { value: 'AZ-900', label: 'Azure certified' },
  { value: 'F500', label: 'Enterprise delivery' },
];

/** Compact proof strip (inspired by editorial / stats portfolios). */
const StatsStrip: React.FC = () => {
  return (
    <section className="stats-strip" aria-label="Highlights">
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="stat-item"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.45 }}
        >
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </motion.div>
      ))}
    </section>
  );
};

export default StatsStrip;
