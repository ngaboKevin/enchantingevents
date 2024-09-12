import React, { useState, useEffect } from 'react';
import './Carousel.css';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import {Link} from 'react-router-dom';

const slides = [
  {
    image: slide1,
    description: 'Discover the magic of our events with enchanting details and unforgettable moments.'
  },
  {
    image: slide2,
    description: 'Experience elegance and sophistication at every occasion we craft.'
  },
  {
    image: slide3,
    description: 'Join us in creating beautiful memories that will last a lifetime.'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
            {/* Dark Transparent Overlay */}
            <div className="carousel-overlay">
              <div className="overlay-content">
                <p>{slide.description}</p>
                <Link to="/contactUs" className="contact-link">
                <button className="quotation-button">Contact Us</button>
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
