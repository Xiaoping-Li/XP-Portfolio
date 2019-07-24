import React, { Component } from 'react';
import { projects } from '../data/Projects';
import HomeProjectsCarousel from './HomeProjectsCarousel';
import '../CSS/homeProjectsList.css';


class HomeProjectsList extends Component {
  state = {
    carouselShow: false,
    activeID: 0,
  };

  // event handlers with parameters property initializer
  handleEventChange = (idx) => (e) => {
    e.preventDefault();
    this.setState({ carouselShow: !this.state.carouselShow, activeID: idx });
  }

  handleCarouselShow = () => this.setState({ carouselShow: !this.state.carouselShow })
  
  render() {
    return (
      <div className="home-projects-list-container">
        {projects.map((project, index) => {
          return (
            <div className="home-projects-list-item">
              <div className="home-projects-list-item-hover-off">
                <img src={project.img[0].url} alt="project cover photo" />
                <h3>{project.title}</h3>
              </div>
  
              <div className="home-projects-list-item-hover-on">
                <h3>{project.title}</h3>
                <h4>{project.descShort}</h4>
                <button onClick={this.handleEventChange(index)}>CLICK</button>
              </div> 
            </div>
          );
        })}

        <div>
          <HomeProjectsCarousel
            show={this.state.carouselShow}
            handleCarouselShow={this.handleCarouselShow}
            id={this.state.activeID} 
          />
        </div> 
      </div>
    );
  } 
}

export default HomeProjectsList;