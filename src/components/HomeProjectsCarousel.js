import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import { projects } from '../data/Projects';
//import '../CSS/homeProjectsCarousel.css';


function HomeProjectsCarousel(props) {
  return (
    <div className="home-projects-carousel">
      <Modal
        show={props.show}
        // centered
        // dialogClassName="home-projects-carousel-modal"
        // size="xl"
      >
        <button className="demo-form-close-btn" onClick={props.handleCarouselShow}>
            {/* <img src={closeBtn}/> */}
            X
        </button>

        <div style={{border: '1px solid red', backgroundColor:'#fff'}}>  
          <Carousel
            interval={null}
          >
            {projects.map((item, idx) => {
              return (
                <Carousel.Item>
                <div className="home-projects-carousel-item">
                  <img
                    src={item.img[0]} alt="project-cover-photo"
                    className="home-projects-carousel-item-img"
                    style={{width: 100, height: 100}}
                  />

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
    </div>
  );
}

export default HomeProjectsCarousel;