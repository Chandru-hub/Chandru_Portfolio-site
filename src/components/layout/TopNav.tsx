import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BRAND_NAME, NAV_SECTIONS } from '../../utils/constants';
import ThemeToggle from '../common/ThemeToggle';
import { useAppContext } from '../../context/AppContext';

/** Fixed header — stays reachable while scrolling on mobile/tablet/desktop. */
const TopNav: React.FC = () => {
  const { activeSection, setActiveSection } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const onScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  return (
    <header className={`top-nav${menuOpen ? ' is-open' : ''}`}>
      <div className="top-nav-bar">
        <a href="#about" className="brand" onClick={goTo('about')}>
          <i className="fas fa-terminal" />
          <span>{BRAND_NAME}</span>
        </a>

        <nav className="top-nav-links" aria-label="Primary">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`top-nav-link${activeSection === section.id ? ' is-active' : ''}`}
              onClick={goTo(section.id)}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="top-nav-actions">
          <div className="top-nav-theme">
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="nav-burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile"
          >
            {NAV_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={activeSection === section.id ? 'is-active' : ''}
                onClick={goTo(section.id)}
              >
                {section.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopNav;
