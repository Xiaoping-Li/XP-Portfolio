import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { projects } from '../data/Projects';
import Project from './Project';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import '../CSS/projects.css';


function Projects({match}) {
  return (
    <div className="projects">
      <ScrollToTopOnMount />
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
          <Switch>
            <Redirect exact from={`${match.path}`} to={`${match.path}/pets-e-shopping`} />
            <Route path={`${match.path}/:projectId`} component={Project} />
          </Switch>
        </div> 
      </div>  
    </div>
  );
}

export default Projects;