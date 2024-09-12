import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/admin/login');
  };

  const [submissionsCount, setSubmissionsCount] = useState(0);
  const [supplyCount, setSupplyCount] = useState(0);
  const [subscribersCount, setSubscribersCount] = useState(0);
  const [messagesCount, setMessagesCount] = useState(0);
  const [reservationsCount, setReservationsCount] = useState(0);
  const [inquiriesCount, setInquiriesCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dashboard/submissions')
      .then(response => setSubmissionsCount(response.data.count))
      .catch(error => console.error('Error fetching submissions count:', error));

    axios.get('http://localhost:5000/api/dashboard/suppliers')
    .then(response => setSupplyCount(response.data.count))
    .catch(error => console.error('Error fetching supply count:', error))

    axios.get('http://localhost:5000/api/dashboard/subscribers')
      .then(response => setSubscribersCount(response.data.count))
      .catch(error => console.error('Error fetching subscribers count:', error));

    axios.get('http://localhost:5000/api/dashboard/messages')
      .then(response => setMessagesCount(response.data.count))
      .catch(error => console.error('Error fetching messages count:', error));
    
    axios.get('http://localhost:5000/api/dashboard/reservations')
      .then(response => setReservationsCount(response.data.count))
      .catch(error => console.error('Error fetching reservations count:', error));
      
    axios.get('http://localhost:5000/api/dashboard/inquiries')
      .then(response => setInquiriesCount(response.data.count))
      .catch(error => console.error('Error fetching inquiries count:', error));
  }, []);

  const navigateToTable = (tableName) => {
    navigate(`/table/${tableName}`);
  };

  return (
    <div>
      <button onClick={handleLogout} className='logout'>Logout</button>
      <div className="dashboard-container">

      <div onClick={() => navigateToTable('suppliers')} className="dashboard-div suppliers">
          <h3>Suppliers</h3>
          <p className='point'>{supplyCount}</p>
        </div>
        <div onClick={() => navigateToTable('submissions')} className="dashboard-div submissions">
          <h3>Submissions</h3>
          <p className='point'>{submissionsCount}</p>
        </div>
        <div onClick={() => navigateToTable('subscribers')} className="dashboard-div subscribers">
          <h3>Subscribers</h3>
          <p className='point'>{subscribersCount}</p>
        </div>
        <div onClick={() => navigateToTable('messages')} className="dashboard-div messages">
          <h3>Messages</h3>
          <p className='point'>{messagesCount}</p>
        </div>
        <div onClick={() => navigateToTable('reservations')} className="dashboard-div reservations">
          <h3>Reservations</h3>
          <p className='point'>{reservationsCount}</p>
        </div>
        <div onClick={() => navigateToTable('inquiries')} className="dashboard-div inquiries">
          <h3>Inquiries</h3>
          <p className='point'>{inquiriesCount}</p>
        </div>
      </div>
      <footer className='foot'>&copy; 2024 Enchanting Events. All rights reserved.</footer>
    </div>
  );
};

export default Dashboard;
