import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Table.css';

const TableMessages = () => {
  const [data, setData] = useState([]);
  const { messages } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/messages`)
      .then(response => setData(response.data))
      .catch(error => console.error(`Error fetching ${messages} data:`, error));
  }, [messages]);

  const handleRowClick = (id) => {
    navigate(`/detail/messages/${id}`);
  };

  return (
    <div className="table-container">
      <h2>Messages</h2>
      <table>
        <thead>
          <tr>
            {/* Define table headers based on the data structure */}
            <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Message</th>
                <th>Created At</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
        {data.map(message => (
                <tr key={message.id} onClick={() => handleRowClick(message.id)}>
                  <td>{message.id}</td>
                  <td>{message.namees}</td>
                  <td>{message.email}</td>
                  <th>{message.phone_number}</th>
                  <td>{message.message}</td>
                  <td>{new Date(message.created_at).toLocaleString()}</td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMessages;
