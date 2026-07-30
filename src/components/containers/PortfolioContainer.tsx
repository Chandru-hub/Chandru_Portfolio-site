import React, { lazy, useDeferredValue } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopNav from '../layout/TopNav';
import Footer from '../layout/Footer';
import MotionAtmosphere from '../common/MotionAtmosphere';
import { ConcurrentBoundary } from '../concurrent/ConcurrentBoundary';
import { PortfolioSkeleton } from '../skeleton/Skeleton';
import { useIsrData } from '../../hooks/useIsrData';
import { useHydration } from '../../hooks/useHydration';
import { useAppContext } from '../../context/AppContext';
import { useAppSelector } from '../../store/hooks';
import { useSectionObserver } from '../../hooks/useSectionObserver';
import { pageEnter } from '../../utils/animations';

const Profile = lazy(() => import('../sections/Profile'));
const StatsStrip = lazy(() => import('../sections/StatsStrip'));
const Experience = lazy(() => import('../sections/Experience'));
const Skills = lazy(() => import('../sections/Skills'));
const Education = lazy(() => import('../sections/Education'));
const Projects = lazy(() => import('../sections/Projects'));
const Certifications = lazy(() => import('../sections/Certifications'));

/**
 * Editorial single-column portfolio layout.
 */
const PortfolioContainer: React.FC = () => {
  const hydrated = useHydration();
  const { isOnline, isHydrated } = useAppContext();
  const { isLoading, isPending, isStale, error, deferredStatus } = useIsrData();
  const deferredLoading = useDeferredValue(isLoading);
  const themeMode = useAppSelector((state) => state.theme.mode);
  useSectionObserver();

  if (!hydrated || !isHydrated || deferredLoading) {
    return <PortfolioSkeleton />;
  }

  return (
    <>
      <MotionAtmosphere />
      <TopNav />
      <motion.div
        className="site"
        data-fiber="concurrent"
        data-hydrated={String(hydrated)}
        variants={pageEnter}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={themeMode}
            className="theme-flash"
            initial={{ opacity: 0.22 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            aria-hidden="true"
          />
        </AnimatePresence>

        <main className="site-main">
          <AnimatePresence>
            {(!isOnline || isStale || isPending) && (
              <motion.div
                className="status-banner"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                role="status"
              >
                {!isOnline && 'You are offline — showing cached content.'}
                {isOnline && isPending && 'Revalidating portfolio (ISR)…'}
                {isOnline && !isPending && isStale && 'Content may be stale.'}
              </motion.div>
            )}
          </AnimatePresence>

          {error && deferredStatus === 'failed' && (
            <div className="error-fallback" role="alert">
              {error}
            </div>
          )}

          <ConcurrentBoundary fallback={<PortfolioSkeleton />}>
            <Profile />
            <StatsStrip />
            <Experience />
            <Skills />
            <Projects />
            <div className="split-sections">
              <Education />
              <Certifications />
            </div>
          </ConcurrentBoundary>
        </main>

        <Footer />
      </motion.div>
    </>
  );
};

export default PortfolioContainer;
