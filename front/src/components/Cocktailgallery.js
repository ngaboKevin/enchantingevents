import React from 'react';
import './Gallery.css';

// Import images from the local directory
import image1 from '../images/gallery/cocktails/bubbles-6841040_1280.jpg'
import image2 from '../images/gallery/cocktails/cocktail-6723796_1280.jpg'
import image3 from '../images/gallery/cocktails/cocktail-7028694_1280.jpg'
import image4 from '../images/gallery/cocktails/cocktail-drinks-6950673_1280.jpg'
import image5 from '../images/gallery/cocktails/cocktails-932039_1280.jpg'
import image6 from '../images/gallery/cocktails/drink-1179309_1280.jpg'
import image7 from '../images/gallery/cocktails/drink-1461792_1280.jpg'
import image8 from '../images/gallery/cocktails/drink-4475363_1280.jpg'



const images = [
  { src: image1, alt: 'Image 1', span: 'span-2' },
  { src: image2, alt: 'Image 2', span: 'span-1' },
  { src: image3, alt: 'Image 3', span: 'span-1' },
  { src: image4, alt: 'Image 4', span: 'span-2' },
  { src: image5, alt: 'Image 5', span: 'span-1' },
  { src: image6, alt: 'Image 6', span: 'span-2' },
  { src: image7, alt: 'Image 7', span: 'span-1' },
  { src: image8, alt: 'Image 8', span: 'span-1' },
];

const KidsGallery = () => {
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

export default KidsGallery;
