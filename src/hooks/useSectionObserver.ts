import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { NAV_SECTIONS } from '../utils/constants';

/** Tracks which section is in view and syncs AppContext.activeSection. */
export const useSectionObserver = (): void => {
  const { setActiveSection } = useAppContext();

  useEffect(() => {
    const ids = NAV_SECTIONS.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [setActiveSection]);
};
