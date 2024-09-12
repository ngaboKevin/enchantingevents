// Form.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Import the CSS file

const SupplyForm = () => {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    services: '',
    price: '',
    phone: '',
    message: '',
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('names', formData.names);
    data.append('email', formData.email);
    data.append('services', formData.services);
    data.append('price', formData.price);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    data.append('cv', formData.cv);

    axios.post('http://localhost:5000/supply', data)
      .then((response) => {
        alert('Form submitted successfully!');
        setFormData({
          names: '',
          email: '',
          services: '',
          price: '',
          phone: '',
          message: '',
          cv: null,
        });
      })
      .catch((error) => {
        alert('An error occurred while submitting the form.');
        console.error(error);
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Submit Your Details</h2>
      <div className="form-group">
        <input
          type="text"
          name="names"
          value={formData.names}
          onChange={handleChange}
          required
          placeholder='Enter your Names'
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Enter your Email'
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="services"
          value={formData.services}
          onChange={handleChange}
          required
          placeholder='Services you offer'
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          placeholder='Propose your prices'
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder='Enter your Phone number'
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder='Leave us your message'
        />
      </div>
      <div className="form-group">
        <label>CV (PDF, max 100MB):</label>
        <input
          type="file"
          name="cv"
          accept=".pdf"
          onChange={handleFileChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default SupplyForm;
