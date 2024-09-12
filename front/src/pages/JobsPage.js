import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/banner.css';
import '../components/JobsForm.css'
import JobsForm from '../components/JobsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

 function JobsPage(){
   const sectionStyle = {
      height: '50vh', // 50% of the viewport height
      width: '100%', // Full width of the page
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2021/01/06/07/33/fisherman-5893401_1280.jpg")', // Replace with your image URL
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
  
   return (
    <div>
    <center><div className='topDiv'><FontAwesomeIcon icon={faPhone} />For more enquiries Contact +250 786 438 680</div></center>
    <Navbar/>
    <div style={sectionStyle}>
            <div style={overlayStyle}>
                <h1 style={headingStyle}>Apply and work with Us!</h1>
            </div>
        </div>
   <center>
   <JobsForm/>
   </center>

    <Footer/>
</div>
   )
}

export default JobsPage;


/*
 <header className="banner">
        <h1 className='banner-title'>Join Our Team at Enchanting Events </h1>
   </header>
*/