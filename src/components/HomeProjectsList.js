import React from 'react';
import { projects } from '../data/Projects';
import '../CSS/homeProjectsList.css';


function HomeProjectsList() {
  return (
    <div className="home-projects-list-container">
      {projects.map(project => {
        return (
          <div className="home-projects-list-item">
            <div className="home-projects-list-item-hover-off">
              <img src={project.img[0]} alt="project cover photo" />
              <h3>{project.title}</h3>
            </div>

            <div className="home-projects-list-item-hover-on">
              <h3>{project.title}</h3>
              <h4>{project.descShort}</h4>
              <button>CLICK</button>
            </div> 
          </div>
        );
      })}
      
    </div>
  );
}

export default HomeProjectsList;