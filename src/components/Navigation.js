import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../images/Xiaoping Li.png';
import '../CSS/navBar.css';

function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="person-info">
        <img src={photo} alt="self" className="thumbnail" />
        <div className="title">
          <div className="name">Xiaoping Li</div>
          <div className="sub-title">Web|Mobile Development</div>
        </div>
      </div>

      <div className="links">
        <NavLink exact to='/' className="link" activeClassName="active-link">Home</NavLink>
        <NavLink to='/about' className="link" activeClassName="active-link">About</NavLink>
        <NavLink to='/projects' className="link" activeClassName="active-link">Projects</NavLink>
      </div>
    </nav> 
  );
}

export default Navigation;