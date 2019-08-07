import React, { Component } from 'react';
import {roadMap} from '../data/RoadMap';
import slideLeft from '../images/slide-arrow-left.svg';
import slideRight from '../images/slide-arrow-right.svg';
import '../SCSS/components/roadMapCarousel.scss';


class RoadmapCarousel extends Component {
  state = {
    len: roadMap.length,
  };
    

  handleLeftClick = () => {
    if (this.state.len > 3) {
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
    let renderArr = roadMap.slice(this.state.len - 3, this.state.len);

    return(
      <div className="roadmap-carousel">
        <div
          onClick={this.handleLeftClick}
          className="roadmap-carousel-glyphicon"
        >
          <img src={slideLeft} alt="left arrow" />
        </div>

        <div className="roadmap-carousel-items">
          {renderArr.map((item, idx) => {
            return(
              <div className="roadmap-carousel-item" key={idx}>
                <div className="card-roadmap-carousel">
                  <img
                    src={item.img}
                    alt="roadmap"
                  />
                  <div>{item.title}</div>
                  <div style={{fontWeight: '500', color: '$darkThemeColor', fontFamily: "Snell Roundhand, cursive"}}>{item.time}</div>
                </div>
                <div className="roadmap-carousel-items-divider"></div>
              </div>
            );
          })}
        </div>

        <div
          onClick={this.handleRightClick}
          className="roadmap-carousel-glyphicon"
        >
          <img src={slideRight} alt="right arrow" />
        </div>
      </div>
    );
  }
}

export default RoadmapCarousel;