import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

 function Accomodation(){

   return(
  
    <div>
      <center><div className='topDiv'><FontAwesomeIcon icon={faPhone} />For more enquiries Contact +250 786 438 680</div></center>
      <Navbar/>
        <Services/>
      <Footer/>
    </div>
   )
}


export default Accomodation;