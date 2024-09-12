// src/MapComponent.js
import React from 'react';
import './MapComponent.css';

const MapComponent = () => {
  return (
    <div className="map-container">
      <h2>Location</h2>
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31662.02233936484!2d30.08709241607273!3d-1.968484480720932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7e48c5e810d%3A0x19307b6ddc7d66f7!2sKicukiro%2C%20Kigali!5e0!3m2!1sen!2srw!4v1591076614739!5m2!1sen!2srw"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default MapComponent;
