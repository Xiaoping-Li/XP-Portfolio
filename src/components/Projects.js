import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { projects } from '../data/Projects';
import Project from './Project';
import '../CSS/projects.css';

function Projects({match}) {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div className="projects-body">
        <div className="side-nav-bar">
          {projects.map(({title, id}) => (
            <NavLink 
              to={`${match.url}/${id}`}
              className="link"
              activeClassName="active-link"
            >
              {title}
            </NavLink>
          ))}
        </div>

        <Route path={`${match.path}/:projectId`} component={Project} />
      </div>  
    </div>
  );
}

export default Projects;