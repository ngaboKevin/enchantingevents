import React from 'react';
import AboutUs from '../components/AboutUs'
import Carousel from '../components/Carousel'
import VisionMission from '../components/VisionMission'
import Footer from '../components/Footer'
import MapComponent from '../components/MapComponent'
import Partners from '../components/Partners';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Subscribe from '../components/Subscribe';

export default function Home(){
    return(
        <div>
            <center><div className='topDiv'><FontAwesomeIcon icon={faPhone} />For more enquiries Contact +250 786 438 680</div></center>
            <Navbar/>
        <Carousel/>
            <AboutUs/>
            <VisionMission/>
            <Partners/>
            <MapComponent/>
            <Subscribe/>
        <Footer/>
        </div>
    )
   
}
