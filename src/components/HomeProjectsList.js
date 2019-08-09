import React, { Component } from 'react';
import { projects } from '../data/Projects';
import HomeProjectsCarousel from './HomeProjectsCarousel';
import '../SCSS/components/homeProjectsList.scss';


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
  
  handleSelect = (selectedIndex) => this.setState({ activeID: selectedIndex })
 
  render() {
    return (
      <div className="home-projects-list">
        {projects.map((project, index) => {
          return (
            <div className="home-projects-list-item" key={index}>
              <div className="home-projects-list-item-hover-off">
                <img src={project.img[0].url} alt="project" />
                <h3>{project.title}</h3>
              </div>
  
              <div className="home-projects-list-item-hover-on">
                {/* <h3>{project.title}</h3> */}
                <h4>{project.descShort}</h4>
                <button onClick={this.handleEventChange(index)}>More...</button>
              </div> 
            </div>
          );
        })}

        <HomeProjectsCarousel
          show={this.state.carouselShow}
          handleCarouselShow={this.handleCarouselShow}
          id={this.state.activeID} 
          onSelect={this.handleSelect}
        />
      </div>
    );
  } 
}

export default HomeProjectsList;