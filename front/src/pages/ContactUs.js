import React from 'react';
//import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar';
import '../components/banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function ContactUs(){
   const sectionStyle = {
      height: '50vh', // 50% of the viewport height
      width: '100%', // Full width of the page
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2019/02/17/18/26/handshake-4002834_1280.jpg")', // Replace with your image URL
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
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent overlay
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  };
  
  const headingStyle = {
      color: 'white',
      fontSize: '3rem',
      textAlign: 'center',
  };

   return(
    <div>
   <center><div className='topDiv'><FontAwesomeIcon icon={faPhone} />For more enquiries Contact +250 786 438 680</div></center>
    <Navbar/>
    <div style={sectionStyle}>
            <div style={overlayStyle}>
                <h1 style={headingStyle}>Contact Us</h1>
            </div>
        </div>
    <ContactForm/>
    <Footer/>
    </div>
   )
}

export default  ContactUs;
