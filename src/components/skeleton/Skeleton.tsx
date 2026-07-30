import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 16,
  borderRadius,
  className = '',
  variant = 'rectangular',
}) => {
  const radius =
    borderRadius ??
    (variant === 'circular' ? '50%' : variant === 'text' ? 4 : 8);

  return (
    <motion.div
      className={`skeleton ${className}`}
      style={{ width, height, borderRadius: radius }}
      animate={{ opacity: [0.4, 0.85, 0.4] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    />
  );
};

export const PortfolioSkeleton: React.FC = () => {
  return (
    <div className="site portfolio-skeleton" aria-busy="true" aria-label="Loading portfolio">
      <div className="top-nav">
        <Skeleton width={90} height={34} borderRadius={40} />
        <Skeleton width={160} height={34} borderRadius={40} />
      </div>
      <main className="site-main">
        <section className="hero-section">
          <Skeleton width={200} height={28} borderRadius={40} />
          <Skeleton width="70%" height={48} variant="text" />
          <Skeleton width="90%" height={48} variant="text" />
          <Skeleton width="75%" height={18} variant="text" />
          <div style={{ display: 'flex', gap: 10 }}>
            <Skeleton width={140} height={42} borderRadius={40} />
            <Skeleton width={120} height={42} borderRadius={40} />
          </div>
        </section>
        <div className="stats-strip">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <Skeleton width={64} height={28} />
              <Skeleton width={90} height={12} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Skeleton;
