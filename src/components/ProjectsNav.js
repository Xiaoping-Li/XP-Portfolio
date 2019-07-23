import React from 'react';
import { NavLink } from 'react-router-dom';


function ProjectsNav() {
  return (
    <nav className="projects-nav-bar">
      <NavLink exact to='/' className="link" activeClassName="active-link">Home</NavLink>
      <NavLink to='/about' className="link" activeClassName="active-link">About</NavLink>
      <NavLink to='/projects' className="link" activeClassName="active-link">Projects</NavLink>
    </nav>
  );
}

export default ProjectsNav;