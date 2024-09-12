import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.css';

const DetailMessages = () => {
  const { messages, id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/messages/${id}`)
      .then(response => setDetail(response.data))
      .catch(error => console.error(`Error fetching detail for ${messages}:`, error));
  }, [messages, id]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <h2>Messages</h2>
      <p><strong>ID:</strong> {detail.id}</p>
      <p><strong>Name:</strong> {detail.namees}</p>
      <p><strong>Email:</strong> {detail.email}</p>
      <p><strong>Phone Number:</strong> {detail.phone_number}</p>      
      <p><strong>Message:</strong> {detail.message}</p>
      <p><strong>Created:</strong> {detail.created_at}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailMessages;
