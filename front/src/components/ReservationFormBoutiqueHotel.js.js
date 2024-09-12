import React, { useState } from 'react';
import axios from 'axios';
import './ReservationForm.css'; // Create this CSS file for styling

const ReservationFormBoutiqueHotels = ({ selectedCategory }) => {
    const [formData, setFormData] = useState({

        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        checkin_date: '',
        checkout_date: '',
        checkin_time: '',
        checkout_time: '',
        adults: 0,
        children: 0,
        pets: 0,
        payment_method: '',
        special_request: '',
        category_id: selectedCategory,
        accommodationCategory:''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/reservations', formData)
            .then(() => alert('Reservation successful'))
            .catch(err => console.error(err));
    };

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className = "input-container">
                <div className="form-group">
        <label htmlFor="accommodationCategory">Choose a Boutique Hotel</label>
        <select
          id="accommodationCategory"
          name="accommodationCategory"
          value={formData.accommodationCategory}
          onChange={handleChange}
          required className="select"
        >
         <option value="">Select Category</option>
          <option value="hotels">Hotels</option>
          <option value="hostels">Hostels</option>
          <option value="Apartments">Apartments</option>
          <option value="Boutique Hotel">Boutique Hotel</option>
          <option value="Guest Houses">Guest Houses</option>
          <option value="Holiday Rental">Holiday Rental</option>
          <option value="Resorts">Resorts</option>
          <option value="Campsites">Campsites</option>
          <option value="Private Homes">Private Homes</option>
          <option value="Airbnb">Airbnb</option>
        </select>
      </div>
                </div>

                <div className="form-row">
                    <div className="input-container">
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
                    </div>
                    <div className="input-container">
                     
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-container">
                       
                        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" required />
                    </div>
                    <div className="input-container">
                        
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-container">
                      
                        <input type="date" name="checkin_date" value={formData.checkin_date} onChange={handleChange} required />
                    </div>
                    <div className="input-container">
                        
                        <input type="date" name="checkout_date" value={formData.checkout_date} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-container">
                      
                        <input type="time" name="checkin_time" value={formData.checkin_time} onChange={handleChange} required />
                    </div>
                    <div className="input-container">
                      
                        <input type="time" name="checkout_time" value={formData.checkout_time} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-container">
                       
                        <input type="text" name="adults" value={formData.adults} onChange={handleChange} placeholder="Adults" required />
                    </div>
                    <div className="input-container">
                        
                        <input type="text" name="children" value={formData.children} onChange={handleChange} placeholder="Children" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-container">
                       
                        <input type="text" name="pets" value={formData.pets} onChange={handleChange} placeholder="Pets" required />
                    </div>
                </div>
                <div className="payment-methods">
                    <label>
                        <input type="radio" name="payment_method" value="Cash" onChange={handleChange} required /> Cash
                    </label>
                    <label>
                        <input type="radio" name="payment_method" value="Check" onChange={handleChange} required /> Check
                    </label>
                    <label>
                        <input type="radio" name="payment_method" value="DC Bank" onChange={handleChange} required /> DC Bank
                    </label>
                    <label>
                        <input type="radio" name="payment_method" value="MTN Mobile Money" onChange={handleChange} required /> MTN Mobile Money
                    </label>
                </div>
                <div className="input-container">
                    
                    <textarea name="special_request" value={formData.special_request} onChange={handleChange} placeholder="Special Requests"></textarea>
                </div>
                <button type="submit" className="submit-button">Reserve</button>
            </div>
        </form>
    );
};

export default ReservationFormBoutiqueHotels;
