import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../CSS/projectCarousel.css';

function ProjectCarousel({img}) {
  return (
    <Carousel
      interval={null}
    >
      {img.map((image, idx) => {
        return (
          <Carousel.Item key={idx}>
            <div className="slides-show-container">
              <div className="glyphicon">{"<"}</div>

              <div className="slides-show">
                <img src={image.url} alt="photos of project" className="slides-show-img" />
                <div className="slides-show-desc">{image.desc}</div>
              </div>

              <div className="glyphicon">{">"}</div>
            </div>   
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ProjectCarousel;