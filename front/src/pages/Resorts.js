import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


function Resorts () {

    const sectionStyle = {
        height: '50vh', // 50% of the viewport height
        width: '100%', // Full width of the page
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/09/12/23/21/chairs-1666070_1280.jpg")', // Replace with your image URL
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
                <h1 style={headingStyle}>Reserve a Resort today!</h1>
            </div>
        </div>
      <center>
      <ReservationForm/>
      </center>
      <Footer/>
    </div>
)
}

export default Resorts;