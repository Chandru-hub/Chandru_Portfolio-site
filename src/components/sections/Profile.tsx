import React from 'react';
import { motion } from 'framer-motion';
import { useAppSelector } from '../../store/hooks';
import { staggerContainer, staggerItem, drawLine } from '../../utils/animations';

const Profile: React.FC = () => {
  const profile = useAppSelector((state) => state.portfolio.profile);
  if (!profile) return null;

  const { name, title, headline, availability, summary, avatar } = profile;

  return (
    <section id="about" className="section hero-section">
      <div className="hero-plane" aria-hidden="true" />
      <motion.div
        className="hero-compose"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="availability-pill" variants={staggerItem}>
          <span className="availability-dot" />
          {availability}
        </motion.div>

        <motion.div className="hero-identity" variants={staggerItem}>
          <span className="hero-avatar" aria-hidden="true">
            {avatar}
          </span>
          <div>
            <p className="hero-greeting">Hello, I’m {name}.</p>
            <p className="hero-role">{title}</p>
          </div>
        </motion.div>

        <motion.h1 className="hero-headline" variants={staggerItem}>
          {headline}
        </motion.h1>

        <motion.div
          className="title-underline"
          variants={drawLine}
          style={{ originX: 0 }}
        />

        <motion.p className="hero-lead" variants={staggerItem}>
          I design and ship secure, scalable enterprise systems with ASP.NET Core, React, Azure,
          and SharePoint — Clean Architecture, CQRS, and CI/CD included.
        </motion.p>

        <motion.div className="hero-actions" variants={staggerItem}>
          <a className="btn-primary" href="#projects">
            See my work
          </a>
          <a className="btn-ghost" href="#skills">
            View skills
          </a>
        </motion.div>
      </motion.div>

      <motion.article
        className="about-panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <p className="section-kicker">About</p>
        <h2 className="section-display">Building systems that stay maintainable.</h2>
        <p className="about-copy">{summary}</p>
        <ul className="method-tags">
          <li>Clean Architecture</li>
          <li>CQRS · MediatR</li>
          <li>Azure DevOps CI/CD</li>
          <li>SPFx · SharePoint</li>
          <li>React · Redux</li>
        </ul>
      </motion.article>
    </section>
  );
};

export default Profile;
