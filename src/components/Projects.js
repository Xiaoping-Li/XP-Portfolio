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
              className="side-nav-bar-link"
              activeClassName="side-nav-bar-active-link"
            >
              <div className="side-nav-bar-marker">
                <div className="side-nav-bar-marker-bar"></div>
                <div className="side-nav-bar-marker-dot"></div>
                <div className="side-nav-bar-marker-bar"></div>
              </div>
              <span className="side-nav-bar-link-name">{title}</span>
            </NavLink>
          ))}
        </div>
        <div className="projects-list">
          {/* { match.path === "/projects" ?
            projects.map((project, index) => (
              <div className="projects-list-item" key={index}>
                <img src={project.img[1].url} alt="welcome page" />
              </div>
            ))
            :
            <Route path={`${match.path}/:projectId`} component={Project} />
          }  */}
          <Route path={`${match.path}/:projectId`} component={Project} />
        </div> 
      </div>  
    </div>
  );
}

export default Projects;