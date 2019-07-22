import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import { projects } from '../data/Projects';
import '../CSS/homeProjectsCarousel.css';


function HomeProjectsCarousel(props) {
  return (
    <Modal
      show={props.show}
      centered
      dialogClassName="home-projects-carousel-modal"
      size="xl"
    >
      <button className="demo-form-close-btn" onClick={props.handleCarouselShow}>
          {/* <img src={closeBtn}/> */}
          X
      </button>

      <div>  
        <Carousel
          interval={null}
        >
          {projects.map((item, idx) => {
            return (
              <Carousel.Item>
                <div className="home-projects-carousel-item">
                  <div className="home-projects-carousel-item-img">
                    <img
                      src={item.img[1]} alt="project-cover-photo"
                      style={{width: '100%', height: 'auto'}}
                    />
                  </div>
                  
                  <div className="home-projects-carousel-item-info">
                    <div className="home-projects-carousel-item-title">{item.title}</div>
                    <div className="home-projects-carousel-item-divider"></div>
                    <p className="home-projects-carousel-item-desc">{item.desc}</p>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </Modal>
  );
}

export default HomeProjectsCarousel;