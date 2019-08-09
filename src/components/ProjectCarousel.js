import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../SCSS/components/projectCarousel.scss';

function ProjectCarousel({img}) {
  return (
    <Carousel
      interval={null}
      indicators={false}
      prevIcon={<span aria-hidden="true" className="project-glyphoneicon">{"<"}</span>}
      nextIcon={<span aria-hidden="true" className="project-glyphoneicon">{">"}</span>}
    >
      {img.map((image, idx) => {
        return (
          <Carousel.Item key={idx}>
            <div className="projects-carousel-item">
              <div className="projects-carousel-item-img">
                <img src={image.url} alt="project" />
              </div>
              
              <div className="projects-carousel-item-info">
                <div className="projects-carousel-item-info-inner">
                  <p className="projects-carousel-item-desc">{image.desc}</p>
                </div>
              </div>
            </div>  
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ProjectCarousel;