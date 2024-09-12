import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home'
import ContactUs from './pages/ContactUs';
import Accomodation from './pages/Accomodation'
import JobsPage from './pages/JobsPage';
//import HotelDetails from './pages/HotelDetails'
import Services from './pages/Services';
//import Navbar from './components/Navbar';
import Register from './pages/Register'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import PrivateRoute from './pages/PrivateRoute';
import OtherServices from './pages/OtherServices';
import TableSuppliers from './components/TableSuppliers';
import DetailSuppliers from './components/DetailSuppliers';
import TableInquiries from './components/TableInquiries';
import DetailInquiry from './components/DetailInquiry';
import TableReservations from './components/TableReservations';
import DetailReservations from './components/DetailReservations';
import TableMessages from './components/TableMessages';
import DetailMessages from './components/DetailMessages'
import TableSubscribers from './components/TableSubscribers';
import DetailSubscribers from './components/DetailSubscribers';
import TableSubmissions from './components/TableSubmissions';
import DetailSubmissions from './components/DetailSubmissions';
import Hostels from './pages/Hostels';
import Apartments from './pages/Apartments';
import Guesthouses from './pages/Guesthouses'
import Holidayrental from './pages/Holidayrental'
import Resorts from './pages/Resorts'
import Campingsites from './pages/Campingsites'
import Hotels from './pages/Hotels'
import Boutiquehotels from './pages/Boutiquehotels'
import Airbnb from './pages/Airbnb';
import Privaate from './pages/Privaate'
import SupplyPage from './pages/SupplyPage';
import Kidsevents from './pages/Kidsevents';
import Cocktailparties from './pages/Cocktailparties';
import Weddings from './pages/Weddings';
import Tours from './pages/Tours'
import Catering from './pages/Catering'
import Acommodation from './pages/Acommodation'

function App() {
  return (
    <div className='App'>
      <Routes>
                <Route path="/admin/register" element={<Register/>} />
                <Route path="/admin/login" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/dashboard" element={<PrivateRoute/>} />
                <Route path="/table/suppliers" element={<TableSuppliers />} />
                <Route path="/detail/suppliers/:id" element={<DetailSuppliers />} />
                <Route path="/table/inquiries" element={<TableInquiries />} />
                <Route path="/detail/inquiries/:id" element={<DetailInquiry />} />
                <Route path="/table/reservations" element={<TableReservations />} />
                <Route path="/detail/reservations/:id" element={<DetailReservations />} />
                <Route path="/table/messages" element={<TableMessages />} />
                <Route path="/detail/messages/:id" element={<DetailMessages />} />
                <Route path="/table/subscribers" element={<TableSubscribers />} />
                <Route path="/detail/subscribers/:id" element={<DetailSubscribers />} />
                <Route path="/table/submissions" element={<TableSubmissions />} />
                <Route path="/detail/submissions/:id" element={<DetailSubmissions />} />
                

      </Routes>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/contactUs" element={<ContactUs/>} />
      <Route path ="/supply" element={<SupplyPage/>} />
      <Route path ="/jobs" element={<JobsPage/>} />
      <Route path ="/accomodation" element ={<Accomodation/>} />
      <Route path ="/services" element ={<Services/>} />
      <Route path="/other-services" element={<OtherServices />} />
      {/* Accommodation Categories link list */}
      <Route path="/hostels" element={<Hostels />} />
      <Route path="/apartments" element={<Apartments />} />
      <Route path="/campingsites" element={<Campingsites />} />
      <Route path="/guesthouses" element={<Guesthouses />} />
      <Route path="/holidayrental" element={<Holidayrental />} />
      <Route path="/resorts" element={<Resorts />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/airbnb" element={<Airbnb />} />
      <Route path="/boutiquehotels" element={<Boutiquehotels />} />
      <Route path ="/private" element ={< Privaate/>} />
      {/* Services gallery pages */}
      <Route path="/kidsevents" element={<Kidsevents />} />
      <Route path="/catering" element={<Catering />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/weddings" element={<Weddings />} />
      <Route path="/cocktailparties" element={<Cocktailparties />} />
      <Route path="/acommodation" element={<Acommodation />} />
      </Routes >
    </div>

  );
}

export default App;


/* <Route path="/hotels/:id" element={<HotelDetails />} />*/

/* 
<Navbar/>
<Route path ="/login" element ={<Login/>} />
     
      */