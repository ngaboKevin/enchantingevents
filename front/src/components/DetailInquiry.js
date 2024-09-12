import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.css';

const DetailInquiry = () => {
  const { inquiries, id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/inquiries/${id}`)
      .then(response => setDetail(response.data))
      .catch(error => console.error(`Error fetching detail for ${inquiries}:`, error));
  }, [inquiries, id]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <h2>Inquiry</h2>
      <p><strong>ID:</strong> {detail.id}</p>
      <p><strong>Name:</strong> {detail.namees}</p>
      <p><strong>Email:</strong> {detail.email}</p>
      <p><strong>Message:</strong> {detail.message}</p>
      <p><strong>Created:</strong> {detail.created_at}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailInquiry;
