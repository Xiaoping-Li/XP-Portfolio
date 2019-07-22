import React from 'react';
import '../CSS/home.css';
import down from '../images/arr_down.png';
import RoadmapCarousel from './RoadmapCarousel';
import HomeProjectsList from './HomeProjectsList';
import { skills } from '../data/Skills';



function Home() {
  return (
    <div className="home">
      {/* Personal Introduction */}
      <div className="intro-container">
        <p className="intro">Hi, I am <span style={{backgroundColor: '#c600eb', color: '#fff', padding: '0 0.3em', borderRadius: '0.5em', textShadow: '2px 2px #411749', boxShadow: '1px 1px 2px 2px #411749' }}>XP</span><br />A Full-stack <span style={{color: '#39ff14'}}>Web</span> | <span style={{color: '#fe019a'}}>Mobile</span> Developer<br />Passionate about <span style={{color: '#1000e5'}}>Solving</span> problems, Learning new skills <span style={{backgroundColor: '#efff1a', color: '#1000e5', padding: '0 0.3em', borderRadius: '0.5em'}}>&</span> Keeping things Easy <span style={{color: '#ff073a'}}>and</span> Pretty.</p>
      </div>
      {/* Pointing down arrow */}
      <div className="arr-container">
        <img className="arr_down bounce" src={down} alt="arrow down" />
      </div>
      {/* About */}
      <div className="home-about">
        <div className="home-about-header">
          <h2>ABOUT</h2>
          <button>DETAILS</button>
        </div>
        <RoadmapCarousel />
      </div>
      {/* Projects */}
      <div className="home-projects">
        <div className="home-projects-header">
          <h2>PROJECTS</h2>
          <button style={{color: '#61D685'}}>DETAILS</button>
        </div>
        <div className="home-projects-list">
          <HomeProjectsList />
        </div> 
      </div>
      {/* Skills */}
      <div className="home-skills">
        <div className="home-skills-header">
          <h2>SKILLS</h2>
        </div>

        <div className="home-skills-list">
          {skills.map(item => {
            return (
              <div className="home-skills-list-item">{item}</div>
            );
          })}
        </div>
      </div>
    </div>
    
  );
}

export default Home;