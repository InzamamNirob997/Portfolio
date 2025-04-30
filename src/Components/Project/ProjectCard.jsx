// ProjectCard.js
import React from 'react';
import styles from './ProjectCard.module.css'
import { getImageUrl } from '../../utils';

const ProjectCard = ({ project }) => {
  const { title, description, demo, imageSrc, source, skills } = project;

  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} className={styles.image} alt={`Image of ${title}`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li className={styles.skill} key={id}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source}  className={styles.link}>Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
