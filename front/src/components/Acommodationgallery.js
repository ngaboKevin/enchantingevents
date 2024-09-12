import React from 'react';
import './Gallery.css';

// Import images from the local directory
import image1 from '../images/gallery/acommodation/santorini-2408867_1280.jpg'


const images = [
    { src: image1, alt: 'Image 1', span: 'span-2' }
];

const Acommodationgallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className={`gallery-item ${image.span}`}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Acommodationgallery;
