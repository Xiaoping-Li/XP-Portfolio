import React from 'react';
import down from '../images/arr_down.png';
import RoadmapCarousel from './RoadmapCarousel';
import HomeProjectsList from './HomeProjectsList';
import { NavLink } from 'react-router-dom';
import { skills } from '../data/Skills';
import '../SCSS/components/home.scss';


class Home extends React.Component {
  handleScrollToProjects = () => {
    const height = window.innerHeight;
    window.scrollTo({ top: height, left: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <div className="home">
        {/* Personal Introduction */}
        <div className="intro-container">
          <p className="intro">Hi, I am <span className="xp">XP</span><br />
            A Full-stack <span className="web">Web</span> | <span className="mobile">Mobile</span> Developer<br />
            Passionate about <span className="solve">Solving</span> problems, Learning new skills <span className="and-sign">&</span> 
            Keeping things Easy <span className="and">and</span> Pretty.
          </p>
        </div>
        {/* Pointing down arrow */}
        <div className="arr-container" onClick={this.handleScrollToProjects}>
          <img className="arr_down bounce" src={down} alt="arrow down" />
        </div>
     
        {/* About */}
        <div className="home-about">
          <div className="home-about-header">
            <h2>ABOUT</h2>
            <NavLink to='/about'>
              <button>DETAILS</button>
            </NavLink>          
          </div>
          <RoadmapCarousel />
        </div>

        {/* Projects */}
        <div className="home-projects">
          <div className="home-projects-header">
            <h2>PROJECTS</h2>
            <NavLink to='/projects'>
              <button style={{color: '#61D685'}}>DETAILS</button>
            </NavLink>
          </div>
          
          <HomeProjectsList />
        </div>
        
        {/* Skills */}
        <div className="home-skills">
          <div className="home-skills-header">
            <h2>SKILLS</h2>
          </div>
  
          <div className="home-skills-list">
            {skills.map((item, idx) => {
              return (
                <div className="home-skills-list-item" key={idx}>
                  <div>
                    <img src={item.img} alt="logo" style={{width: 'auto', height: 60}} />
                  </div>
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;