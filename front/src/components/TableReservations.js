import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Table.css';

const TableReservations = () => {
  const [data, setData] = useState([]);
  const {reservations } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/reservations`)
      .then(response => setData(response.data))
      .catch(error => console.error(`Error fetching ${reservations} data:`, error));
  }, [reservations]);

  const handleRowClick = (id) => {
    navigate(`/detail/reservations/${id}`);
  };

  return (
    <div className="table-container">
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            {/* Define table headers based on the data structure */}
            <th>ID</th>
            <th>Accommodation Category</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Checkin Date</th>
                <th>Checkout Date</th>
                <th>Checkin Time</th> 
                <th>Checkout Time</th>
                <th>Adults</th>
                <th>Children</th>
                <th>Pets</th>
                <th>Budget Range</th>
                <th>Payment Method</th>
                <th>Description</th>
                <th>Category_id</th>
                <th>Created At</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
        {data.map(reservation => (
                <tr key={reservation.id} onClick={() => handleRowClick(reservation.id)}>
                  <td>{reservation.id}</td>
                  <td>{reservation.accommodationCategory}</td>
                  <td>{reservation.first_name}</td>
                  <td>{reservation.last_name}</td>
                  <td>{reservation.phone_number}</td>
                  <td>{reservation.email}</td>
                  <td>{reservation.checkin_date}</td>
                  <td>{reservation.checkout_date}</td>
                  <td>{reservation.checkin_time}</td>
                  <td>{reservation.checkout_time}</td>
                  <td>{reservation.adults}</td>
                  <td>{reservation.children}</td>
                  <td>{reservation.pets}</td>
                  <td>{reservation.budget_range}</td>
                  <td>{reservation.payment_method}</td>
                  <td>{reservation.special_request}</td>
                  <td>{reservation.category_id}</td>
                  <td>{new Date(reservation.created_at).toLocaleString()}</td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableReservations;
