import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.css';

const DetailSubscribers = () => {
  const { subscribers, id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/subscribers/${id}`)
      .then(response => setDetail(response.data))
      .catch(error => console.error(`Error fetching detail for ${subscribers}:`, error));
  }, [subscribers, id]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <h2>Subscribers</h2>
      <p><strong>ID:</strong> {detail.id}</p>
      <p><strong>Email:</strong> {detail.email}</p>
      
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailSubscribers;
