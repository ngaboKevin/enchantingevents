import React from 'react';
import './Gallery.css';

// Import images from the local directory
import image1 from '../images/gallery/weddings/couple-1850073_1280.jpg'
import image2 from '../images/gallery/weddings/marriage-7141823_1280.jpg'
import image3 from '../images/gallery/weddings/vintage-van-4288994_1280.jpg'
import image4 from '../images/gallery/weddings/wedding-1836315_1280.jpg'
import image5 from '../images/gallery/weddings/wedding-photography-5582980_1280.jpg'




const images = [
    { src: image1, alt: 'Image 1', span: 'span-2' },
    { src: image2, alt: 'Image 2', span: 'span-1' },
    { src: image3, alt: 'Image 3', span: 'span-1' },
    { src: image4, alt: 'Image 4', span: 'span-2' },
    { src: image5, alt: 'Image 5', span: 'span-1' },


];

const Weddingsgallery = () => {
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

export default Weddingsgallery;
