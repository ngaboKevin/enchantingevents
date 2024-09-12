import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.css';

const DetailSuppliers = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/suppliers/${id}`)
      .then(response => {
        setDetail(response.data);
      })
      .catch(error => console.error(`Error fetching detail for suppliers ${id}:`, error));
  }, [id]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <h2>Submissions</h2>
      <p><strong>ID:</strong> {detail.id}</p>
      <p><strong>Name:</strong> {detail.names}</p>
      <p><strong>Email:</strong> {detail.email}</p>
      <p><strong>Services:</strong> {detail.services}</p>
      <p><strong>Price:</strong> {detail.price}</p>
      <p><strong>Phone:</strong> {detail.phone}</p>
      <p><strong>Message:</strong> {detail.message}</p>

      {/* Display the CV link if it's available */}
      {detail.cv ? (
       <p><strong>CV:</strong> {detail.cv ? <a href={`http://localhost:5000${detail.cv}`} target="_blank" rel="noopener noreferrer" style={{color:"green", textDecoration:"none", fontSize:20, fontWeight:"bolder"}}>View CV Document</a> : 'No CV uploaded'}</p>

      ) : (
        <p><strong>CV:</strong> Not available</p>
      )}

      <p><strong>Date Submitted:</strong> {detail.submitted_at}</p>
    </div>
  );
};

export default DetailSuppliers;
