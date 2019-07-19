import React from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import { projects } from '../data/Projects';


function HomeProjectsCarousel(props) {
  return (
    <div className="home-projects-carousel">
        <Modal
            show={props.show}
            dialogClassName="home-projects-carousel-modal"
        >

            <Modal.Body>
                <button className="demo-form-close-btn" onClick={props.handleCarouselShow}>
                    {/* <img src={closeBtn}/> */}
                    X
                </button>
                <Carousel
                    interval={null}
                    defaultActiveIndex={props.id}
                    className="home-projects-carousel"
                >
                    {projects.map((item, idx) =>
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
                                    <p className="home-projects-carousel-item-desc">{item.description}</p>
                                </div>
                            </div>
                        </Carousel.Item>)}
                </Carousel>
            </Modal.Body>
        </Modal>
    </div>
);
}

export default HomeProjectsCarousel;