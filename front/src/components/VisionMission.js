import React from 'react';
import './VisionMission.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons';

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="vision-mission-container">
        <div className="vision-mission-item">
          <FontAwesomeIcon icon={faEye} className="icon" />
          <h3>Our Vision</h3>
          <p>
            To be the leading event planning company known for creating
            extraordinary and unforgettable experiences.
          </p>
        </div>
        <div className="vision-mission-item">
          <FontAwesomeIcon icon={faBullseye} className="icon" />
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide exceptional event planning services that
            exceed our clients' expectations, focusing on creativity,
            innovation, and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
