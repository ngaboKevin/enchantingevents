import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/logo.png'



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link to ="/"><img src={logo} alt="company-logo"/></Link></div>
      <ul className="navbar-menu">
        <li><Link to="/" className='link'>Home</Link></li>
        <li><HashLink to="/home#about" className='link'>About Us</HashLink></li>
        <li>
          <Link to="/services" className='link'>Services</Link>
          <ul className="dropdown">
            <li><HashLink to="/services" className='link'>Kids Events</HashLink></li>
            <li><HashLink to="/services" className='link'>Weddings</HashLink></li>
            <li><HashLink to="/services" className='link'>Cocktail Parties</HashLink></li>
            <li><HashLink to="/services" className='link'>Tours</HashLink></li>
           </ul>
        </li>
        <li><Link to="/jobs" className='link'>Jobs</Link></li>
        <li><Link to="/Supply" className='link'>Supply</Link></li>
        <li><Link to="/accomodation" className='link'>Accomodation</Link></li>
      {/* <li><Link to="/gallery" className='link'>Gallery</Link></li> */}  
        <li><Link to="/contactUs" className='link'>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
