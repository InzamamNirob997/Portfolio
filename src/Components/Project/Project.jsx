// Project.js
import React from 'react';
import project from '../../data/project.json';
import styles from './Project.module.css'
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <section className={styles.container} id='Project'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.project}>
        {project.map((projectData, id) => (
          <ProjectCard key={id} project={projectData} />
        ))}
      </div>
    </section>
  );
};

export default Project;
