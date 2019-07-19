import React, { Component } from 'react';
import { projects } from '../data/Projects';
import HomeProjectsCarousel from './HomeProjectsCarousel';
import '../CSS/homeProjectsList.css';


class HomeProjectsList extends Component {
  state = {
    carouselShow: false,
  };

  handleCarouselShow = () => this.setState({ carouselShow: !this.state.carouselShow })
  
  render() {
    return (
      <div className="home-projects-list-container">
        {projects.map((project, index) => {
          return (
            <div className="home-projects-list-item">
              <div style={{width: '100%', height: '100%'}}>
                <div className="home-projects-list-item-hover-off">
                  <img src={project.img[0]} alt="project cover photo" />
                  <h3>{project.title}</h3>
                </div>
    
                <div className="home-projects-list-item-hover-on">
                  <h3>{project.title}</h3>
                  <h4>{project.descShort}</h4>
                  <button onClick={this.handleCarouselShow}>CLICK</button>
                </div> 
              </div>

              <div>
                <HomeProjectsCarousel
                  show={this.state.carouselShow}
                  handleCarouselShow={this.handleCarouselShow}
                  id={index} 
                />
              </div>
            </div> 
          );
        })}  
      </div>
    );
  } 
}

export default HomeProjectsList;