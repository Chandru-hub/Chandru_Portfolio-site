import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { softSpring } from '../../utils/animations';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Card with scroll reveal — uses whileInView (avoids RefObject TS2322 on Netlify). */
const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      className={`card ${className}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -8,
        boxShadow: '0 18px 48px rgba(0,0,0,0.14)',
        transition: softSpring,
      }}
    >
      <motion.div
        className="card-shine"
        initial={{ x: '-120%', opacity: 0 }}
        whileHover={{ x: '120%', opacity: 0.35 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
