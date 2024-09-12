
import './Footer.css';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section sitemap">
          <h3>Sitemap</h3>
          <ul>
          <li><Link to="/" className='link'>Home</Link></li>
          <li><Link to="/home#about" className='link'>About Us</Link></li>
            <li><Link to ="/home#services" className='link'> Services</Link></li>
            <li><Link to="/supply" className='link'>Supply</Link></li>
            <li><Link to="/jobs" className='link'>Jobs</Link></li>
        <li><Link to="/accomodation" className='link'>Accomodation</Link></li>
        <li><Link to="/contactUs" className='link'>Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3 >Contact Us</h3>
          <p className="footer-header-contacts">
            <FontAwesomeIcon icon={faEnvelope} /> Email: info@enchantingevents.com
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-color">&copy; 2024 Enchanting Events - K Ushers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
