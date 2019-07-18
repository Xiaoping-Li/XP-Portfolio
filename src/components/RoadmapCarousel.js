import React, { Component } from 'react';
import {roadMap} from '../data/RoadMap';
import slideLeft from '../images/slide-arrow-left.svg';
import slideRight from '../images/slide-arrow-right.svg';
import '../CSS/roadMapCarousel.css';



class RoadmapCarousel extends Component {
  state = {
    len: roadMap.length,
  };
    

  handleLeftClick = () => {
    if (this.state.len > 4) {
      this.setState({len: this.state.len - 1});
    }
  }

  handleRightClick = () => {
    if (this.state.len < roadMap.length) {
      this.setState({len: this.state.len + 1});
    }
  }

  render() {
    // get the array to render
    let renderArr = roadMap.slice(this.state.len - 4, this.state.len);

    return(
      <div className="roadmap-carousel">
        <button
          onClick={this.handleLeftClick}
          className="roadmap-carousel-left"
        >
          <img src={slideLeft} alt="left arrow" />
        </button>

        <div className="roadmap-carousel-items">
          {renderArr.map((item, idx) => {
            return(
              <div className="roadmap-carousel-item">
                <div key={idx}>
                  {/* <img
                    src={item.img}
                    alt="roadmap-image"
                    className = "roadmap-carousel-item-img"
                  /> */}
                  <div>{item.title}</div>
                  <div className="roadmap-carousel-item-divider"></div>
                  <div>{item.time}</div>
                </div>
                <div className="roadmap-carousel-items-divider"></div>
              </div>
            );
          })}
        </div>

        <button
          onClick={this.handleRightClick}
          className="roadmap-carousel-right"
        >
          <img src={slideRight} alt="right arrow" />
        </button>
      </div>
    );
  }
}

export default RoadmapCarousel;