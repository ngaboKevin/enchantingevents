import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faChild, faGlassMartiniAlt, faHeart, faBus, faBed, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: faChild,
    title: 'Kids Events',
    description: 'Fun and engaging events tailored for kids of all ages.',
    link: '/kidsevents'
  },
  {
    icon: faGlassMartiniAlt,
    title: 'Cocktail Parties',
    description: 'Elegant cocktail parties with bespoke drinks and ambiance.',
    link: '/cocktailparties'
  },
  {
    icon: faHeart,
    title: 'Weddings',
    description: 'Beautiful and memorable weddings planned to perfection.',
    link: '/weddings'
  },
  {
    icon: faBus,
    title: 'Tours',
    description: 'Exciting and well-organized tours to various destinations.',
    link: '/tours'
  },
  {
    icon: faBed,
    title: 'Accommodation',
    description: 'Comfortable and luxurious accommodations for your stay.',
    link: '/acommodation'
  },
  {
    icon: faUtensils,
    title: 'Catering',
    description: 'Delicious catering services for all types of events.',
    link: '/catering'
  },
  {
    icon: faUtensils,
    title: 'Others',
    description: 'Tell us more',
    link: '/others'
  }
];

const Services = () => {
  const sectionStyle = {
    height: '50vh',
    width: '100%',
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2019/12/19/14/52/dewdrop-4706329_1280.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const headingStyle = {
    color: 'white',
    fontSize: '3rem',
    textAlign: 'center',
  };

  return (
    <div>
      <center><div className='topDiv'><FontAwesomeIcon icon={faPhone} />For more enquiries Contact +250 786 438 680</div></center>
      <div style={sectionStyle}>
        <div style={overlayStyle}>
          <h1 style={headingStyle}>Services</h1>
        </div>
      </div>

      <section className="services-section">
        <div className="services-container" id="services">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="service-item">
              <FontAwesomeIcon icon={service.icon} className="icon" />
              <h3 className="link">{service.title}</h3>
              <p className="link">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
