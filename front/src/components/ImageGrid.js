import React from 'react';
import './ImageGrid.css';

import hotel from '../images/hotel.jpg';
import apartment from '../images/apartments.jpg'
import boutiqueHotel from '../images/boutique hotel.jpg'
import guesthouse from '../images/guesthouse.jpg'
import holidayrental from '../images/holidayrental.jpg'
import resorts from '../images/resorts.jpg'
import campingSite from '../images/campingsite.jpg'
import hostel from '../images/hostel.jpg'
import privaate from '../images/private.jpg'
import airbnb from '../images/airbnb.jpg'
import {Link} from 'react-router-dom'

const ImageGrid = () => {

  return (
    <div>
      <h2 className="h2">Range of categories available</h2>
    <div className="flex-container">
     <Link to='/hostels' className="link">
     <div className="flex-item">
      <img src={hostel}/>
      <div className="overlay">
       <p>Hostel</p>
      </div>
     </div>
     </Link>

    <Link to='/apartments' className="link">
    <div className="flex-item">
      <img src={apartment}/>
      <div className="overlay">
        <p>Apartments</p>
      </div>
     </div>
    </Link>
     
     <Link to='/boutiqueHotels' className="link">
     <div className="flex-item">
      <img src={boutiqueHotel}/>
      <div className="overlay">
        <p>Boutique Hotels</p>
      </div>
     </div> 
     </Link>

     <Link to='/guestHouses' className="link">
     <div className="flex-item">
      <img src={guesthouse}/>
      <div className="overlay">
        <p>Guest Houses</p>
      </div>
     </div>
     </Link>
     
     <Link to='/holidayRental' className="link">
     <div className="flex-item">
      <img src={holidayrental}/>
      <div className="overlay">
       <p>Holiday Rental</p>
      </div>
     </div>
     </Link>

     <Link to='/resorts' className="link">
     <div className="flex-item">
      <img src={resorts}/>
      <div className="overlay">
        <p>Resorts</p>
      </div>
     </div>
     </Link>
     
     <Link to='/campingsites' className="link">
     <div className="flex-item">
      <img src={campingSite}/>
      <div className="overlay">
        <p>Camp Sites</p>
      </div>
     </div>
     </Link>

      <Link to ='/hotels' className="link"> 
      <div className="flex-item">
      <img src={hotel}/>
      <div className="overlay">
        <p>Hotel</p>
      </div>
     </div>
      </Link>
     

     <Link to ='/private' className="link">
     <div className="flex-item">
      <img src={privaate}/>
      <div className="overlay">
        <p>Private</p>
      </div>
     </div>
     </Link>

     <Link to='/airbnb' className="link">
     <div className="flex-item">
      <img src={airbnb}/>
      <div className="overlay">
        <p>Airbnb</p>
      </div>
     </div>
     </Link>
     

    </div>
    </div>
  );
};

export default ImageGrid;


/*

 {images.map((image, index) => (
        <div className="flex-item" key={index}>
          <img src={image.src} alt={`${index + 1}`} />
          <div className="overlay">
            <p>{image.word}</p>
          </div>
        </div>
      ))}

*/