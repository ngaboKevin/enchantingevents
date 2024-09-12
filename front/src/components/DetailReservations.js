import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.css';

const DetailReservations = () => {
  const { reservations, id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/reservations/${id}`)
      .then(response => setDetail(response.data))
      .catch(error => console.error(`Error fetching detail for ${reservations}:`, error));
  }, [reservations, id]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <h2>Reservations</h2>
      <p><strong>ID:</strong> {detail.id}</p>
      <p><strong>accommodation Category:</strong> {detail.accommodationCategory}</p>
      <p><strong>First Name:</strong> {detail.first_name}</p>
      <p><strong>Last Name:</strong> {detail.last_name}</p>
      <p><strong>Phone Number:</strong> {detail.phone_number}</p>
      <p><strong>Email:</strong> {detail.email}</p>
      <p><strong>Checkin Date:</strong> {detail.checkin_date}</p>
      <p><strong>Checkout Date:</strong> {detail.checkout_date}</p>
      <p><strong>Checkin Time:</strong> {detail.checkin_time}</p>
      <p><strong>Checkout Time:</strong> {detail.checkout_time}</p>
      <p><strong>Adults:</strong> {detail.adults}</p>
      <p><strong>Children :</strong> {detail.children}</p>
      <p><strong>Pets:</strong> {detail.pets}</p>
      <p><strong>Budget Range:</strong> {detail.budget_range}</p>
      <p><strong>Payment Method:</strong> {detail.payment_method}</p>
      <p><strong>Special Requests:</strong> {detail.special_request}</p>
      <p><strong>Category Id:</strong> {detail.category_id}</p>
      <p><strong>Created At:</strong> {detail.created_at}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailReservations;
