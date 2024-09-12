// src/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    namees: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/inquiries', formData);
      setResponseMessage(response.data);
      setFormData({
        namees: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      setResponseMessage('There was an error submitting your message.');
    }
  };

  return (
    <div>
      <center>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="namees"
                placeholder="Names"
                value={formData.names}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us more about your event"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </center>
    </div>
  );
};

export default ContactForm;
