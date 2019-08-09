import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import photo from '../images/Xiaoping Li.png';
import '../SCSS/components/navBar.scss';

class Navigation extends Component {
  state = {
    menuShow: false,
  };

  toggleMenuShow = () => this.setState({ menuShow: !this.state.menuShow })

  render() {
    return (
      <nav className="nav-bar">
        <div className="person-info">
          <img src={photo} alt="avatar" className="thumbnail" />
          <div className="title">
            <div className="name">Xiaoping Li</div>
            <div className="sub-title">Web | Mobile Development</div>
          </div>
        </div>
  
        <div className="links">
          <NavLink exact to='/' className="link" activeClassName="active-link">Home</NavLink>
          <NavLink to='/about' className="link" activeClassName="active-link">About</NavLink>
          <NavLink to='/projects' className="link" activeClassName="active-link">Projects</NavLink>
        </div>

        <div className="burger-menu">
          <FontAwesomeIcon 
            icon={faBars} 
            size="2x" 
            onClick={this.toggleMenuShow} 
            className={this.state.menuShow ? "menu-icon-hide" : "menu-icon-live"}
          />
          <div className={this.state.menuShow ? "menu-list-live" : "menu-list-hide"} >
            <NavLink exact to='/' className="link" activeClassName="active-link" onClick={this.toggleMenuShow}>Home</NavLink>
            <NavLink to='/about' className="link" activeClassName="active-link" onClick={this.toggleMenuShow}>About</NavLink>
            <NavLink to='/projects' className="link" activeClassName="active-link" onClick={this.toggleMenuShow}>Projects</NavLink>
          </div>
        </div>
      </nav> 
    );
  } 
}

export default Navigation;