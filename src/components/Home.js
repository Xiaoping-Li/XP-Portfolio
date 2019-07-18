import React from 'react';
import '../CSS/home.css';
import down from '../images/arr_down.png';
import RoadmapCarousel from './RoadmapCarousel';

function Home() {
  return (
    <div className="home">
      {/* Personal Introduction */}
      <div className="intro-container">
        <p className="intro">Hi, I am <span style={{backgroundColor: '#c600eb', color: '#fff', padding: '0 0.3em', borderRadius: '0.5em', textShadow: '2px 2px #411749', boxShadow: '2px 2px #411749' }}>XP</span><br />A Full-stack <span style={{color: '#39ff14'}}>Web</span> | <span style={{color: '#fe019a'}}>Mobile</span> Developer<br />Passionate about <span style={{color: '#1000e5'}}>Solving</span> problems, Learning new skills <span style={{backgroundColor: '#efff1a', color: '#1000e5', padding: '0 0.3em', borderRadius: '0.5em'}}>&</span> Keeping things Easy <span style={{color: '#ff073a'}}>and</span> Pretty.</p>
      </div>
      {/* Pointing down arrow */}
      <div className="arr-container">
        <img className="arr_down bounce" src={down} alt="arrow down" />
      </div>
      {/* About */}
      <div className="home-about">
        <div className="home-about-header">
          <h2>ABOUT <span>ME</span></h2>
          <button>DETAILS</button>
        </div>
        <RoadmapCarousel />
      </div>
    </div>
    
  );
}

export default Home;