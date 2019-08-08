import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../SCSS/components/projectCarousel.scss';
 
function ProjectCarousel({img}) {
  return (
    <Carousel
      interval={null}
      indicators={false}
    >
      {img.map((image, idx) => {
        return (
          <Carousel.Item key={idx}>
            <div className="slides-show">
              <img src={image.url} alt="photos of project" />
              <div className="slides-show-desc">{image.desc}</div>
            </div>   
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ProjectCarousel;