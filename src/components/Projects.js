import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { projects } from '../data/Projects';
import Project from './Project';
import '../CSS/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

function Projects({match}) {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div className="projects-body">
        <div className="side-nav-bar">
          {projects.map(({title, id}) => (
            <NavLink 
              to={`${match.url}/${id}`}
              className="side-nav-bar-link"
              activeClassName="side-nav-bar-active-link"
            >
              <FontAwesomeIcon icon={faMapPin} size="2x" />
              <span className="side-nav-bar-link-name">{title}</span>
            </NavLink>
          ))}
        </div>

        <Route path={`${match.path}/:projectId`} component={Project} />
      </div>  
    </div>
  );
}

export default Projects;