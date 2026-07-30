import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_NAME, NAV_SECTIONS } from '../../utils/constants';
import ThemeToggle from '../common/ThemeToggle';
import { useAppContext } from '../../context/AppContext';
import { useAppSelector } from '../../store/hooks';
import { springTransition } from '../../utils/animations';

/** Legacy sidebar — kept for optional use; contacts removed. */
const Sidebar: React.FC = () => {
  const { activeSection, setActiveSection } = useAppContext();
  const profile = useAppSelector((state) => state.portfolio.profile);

  const onNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <motion.a
          href="#about"
          className="brand"
          onClick={onNavClick('about')}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={springTransition}
        >
          <i className="fas fa-terminal" />
          {BRAND_NAME}
        </motion.a>

        <div className="sidebar-identity">
          <p className="sidebar-kicker">Portfolio</p>
          <h1 className="sidebar-name">{profile?.name ?? 'Chandra Sekar S'}</h1>
          <p className="sidebar-role">{profile?.title ?? 'Full-Stack Developer'}</p>
        </div>

        <nav className="sidebar-nav" aria-label="Section navigation">
          {NAV_SECTIONS.map((section, index) => {
            const active = activeSection === section.id;
            return (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className={`sidebar-nav-link${active ? ' is-active' : ''}`}
                onClick={onNavClick(section.id)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <span className="nav-index">0{index + 1}</span>
                <span className="nav-label">{section.label}</span>
              </motion.a>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
