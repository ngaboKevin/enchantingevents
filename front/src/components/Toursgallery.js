import React from 'react';
import './Gallery.css';

// Import images from the local directory
import image1 from '../images/gallery/tours/leisure-373859_1280.jpg'
import image2 from '../images/gallery/tours/the-landscape-of-the-mountains-5206204_1280.jpg'
import image3 from '../images/gallery/tours/tour-guide-6816049_1280.jpg'
import image4 from '../images/gallery/tours/tours-guide-1655755532.jpg'


const images = [
    { src: image1, alt: 'Image 1', span: 'span-2' },
    { src: image2, alt: 'Image 2', span: 'span-1' },
    { src: image3, alt: 'Image 3', span: 'span-1' },
    { src: image4, alt: 'Image 4', span: 'span-2' },
];

const Toursgallery = () => {
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

export default Toursgallery;
