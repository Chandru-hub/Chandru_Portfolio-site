import React from 'react';
import { motion } from 'framer-motion';
import { useAppSelector } from '../../store/hooks';
import { listReveal, listItem } from '../../utils/animations';

const Projects: React.FC = () => {
  const projectsData = useAppSelector((state) => state.portfolio.projects);

  return (
    <section id="projects" className="section">
      <div className="section-head">
        <p className="section-kicker">Selected work</p>
        <h2 className="section-display">Projects & delivery</h2>
      </div>

      <motion.div
        className="project-list"
        variants={listReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projectsData.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-row"
            variants={listItem}
            whileHover={{ x: 4 }}
          >
            <span className="project-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="project-body">
              {project.category && (
                <p className="project-category">{project.category}</p>
              )}
              <h3 className="project-heading">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              {project.stack && (
                <ul className="stack-tags">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
