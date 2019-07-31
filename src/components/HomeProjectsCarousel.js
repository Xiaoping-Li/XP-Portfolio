import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { projects } from '../data/Projects';
import '../SCSS/components/homeProjectsCarousel.scss';


function HomeProjectsCarousel(props) {
  return (
    <Modal
      show={props.show}
      centered
      dialogClassName="home-projects-carousel-modal"
      size="xl"
    >
      <div className="carousel-modal-close-btn" onClick={props.handleCarouselShow}>
        <FontAwesomeIcon icon={faTimes}/>
      </div>

      <div>  
        <Carousel
          interval={null}
          activeIndex={props.id}
          onSelect={props.onSelect}
        >
          {projects.map((item, idx) => {
            return (
              <Carousel.Item key={idx}>
                <div className="home-projects-carousel-item">
                  <div className="home-projects-carousel-item-img">
                    <img
                      src={item.img[1].url} alt="project"
                      style={{width: '100%', height: 'auto'}}
                    />
                  </div>
                  
                  <div className="home-projects-carousel-item-info">
                    <div className="home-projects-carousel-item-title">{item.title}</div>
                    <div className="home-projects-carousel-item-media">
                      <a href={item.github} target="_blank"><FontAwesomeIcon icon={faGithub} className="carousel-item-media-i" /></a>
                      {item.live && <a href={item.live} target="_blank"><FontAwesomeIcon icon={faLink} className="carousel-item-media-i" /></a>}
                      {item.youtube && <a href={item.youtube} target="_blank"><FontAwesomeIcon icon={faYoutube} className="carousel-item-media-i" /></a>}
                    </div>
                    {item.frontEnd && <div className="home-projects-carousel-item-desc"><span>Front End: </span>{item.frontEnd}</div>}
                    {item.backEnd && <div className="home-projects-carousel-item-desc"><span>Back End: </span>{item.backEnd}</div>}
                    <p className="home-projects-carousel-item-desc"><span>Synopsis: </span>{item.desc}</p>
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