import React from 'react';
import { projects } from '../data/Projects';
import ProjectCarousel from './ProjectCarousel';
import '../CSS/project.css';

function Project({match}) {
  const project = projects.find(({ id }) => id === match.params.projectId);
  const images = project.img.slice(1);
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <div className="project-info">
        <div className="project-info-subtitle">{project.descShort}</div>
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