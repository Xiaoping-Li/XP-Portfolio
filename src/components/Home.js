import React from 'react';
import '../CSS/home.css';

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <p>Hi, I am <span style={{color: '#c600eb'}}>XP</span><br />A Full-stack <span style={{backgroundColor: '#39ff14', color: '#fff',}}>Web</span> | <span style={{color: '#fe019a'}}>Mobile</span> Developer<br />Passionate about <span style={{color: '#1000e5'}}>Solving</span> problems, Learning new skills <span style={{backgroundColor: '#efff1a', color: '#1000e5', padding: '0 0.3em', borderRadius: '0.5em'}}>&</span> Keeping things Easy <span style={{color: '#ff073a'}}>and</span> Pretty.</p>
      </div>
    </div>
  );
}

export default Home;