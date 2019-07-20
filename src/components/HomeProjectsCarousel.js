import React from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-bootstrap';
import { projects } from '../data/Projects';
//import '../CSS/homeProjectsCarousel.css';


function HomeProjectsCarousel(props) {
  return (
    <div className="home-projects-carousel">
      <Modal
        isOpen={props.show}
        dialogClassName="home-projects-carousel-modal"
        centered
      >
        <button className="demo-form-close-btn" onClick={props.handleCarouselShow}>
            {/* <img src={closeBtn}/> */}
            X
        </button>
        <div style={{width: 750, height: 500, border: '1px solid red'}}>
          <Carousel
            interval={null}
            activeIndex={props.id}
            keyboard={true}
            className="home-projects-carousel"
          >
            {projects.map((item, idx) => {
              return (
                <Carousel.Item
                  key={idx}
                >
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