import React from 'react';
import { projects } from '../data/Projects';
import ProjectCarousel from './ProjectCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../CSS/project.css';

function Project({match}) {
  const project = projects.find(({ id }) => id === match.params.projectId);
  const images = project.img.slice(1);
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <div className="project-info">
        <div className="project-info-subtitle">
          <a href={project.github} target="_blank"><FontAwesomeIcon icon={faGithub} className="carousel-item-media-i" /></a>
          {project.live && <a href={project.live} target="_blank"><FontAwesomeIcon icon={faLink} className="carousel-item-media-i" /></a>}
          {project.youtube && <a href={project.youtube} target="_blank"><FontAwesomeIcon icon={faYoutube} className="carousel-item-media-i" /></a>}
        </div>
        {project.frontEnd && <div><span className="strong-title">Front End: </span>{project.frontEnd}</div>}
        {project.backEnd && <div><span className="strong-title">Back End: </span>{project.backEnd}</div>}
        {project.desc && <div><span className="strong-title">Introduction: </span>{project.desc}</div>}
      </div>
      <div className="project-carousel">
        <ProjectCarousel img={images}/>
      </div>
    </div>
  );
}

export default Project;