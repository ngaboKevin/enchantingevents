// Form.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Import the CSS file

const JobsForm = () => {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    profession: '',
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
    data.append('profession', formData.profession);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    data.append('cv', formData.cv);

    axios.post('http://localhost:5000/jobs', data)
      .then((response) => {
        alert('Form submitted successfully!');
        setFormData({
          names: '',
          email: '',
          profession: '',
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
          placeholder='Enter your names'
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          required
        />
      </div>
      <div className="form-group">
        
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          placeholder='Enter your profession'
          required
        />
      </div>
      <div className="form-group">
        
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder='Enter your phone No'
          required
        />
      </div>
      <div className="form-group">
        
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Leave us your message!'
          required
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

export default JobsForm;
