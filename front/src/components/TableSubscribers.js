import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Table.css';

const TableSubscribers = () => {
  const [data, setData] = useState([]);
  const { subscribers } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/subscribers`)
      .then(response => setData(response.data))
      .catch(error => console.error(`Error fetching ${subscribers} data:`, error));
  }, [subscribers]);

  const handleRowClick = (id) => {
    navigate(`/detail/subscribers/${id}`);
  };

  return (
    <div className="table-container">
      <h2>Subscribers</h2>
      <table>
        <thead>
          <tr>
            {/* Define table headers based on the data structure */}
            <th>ID</th>
                <th>Email</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
        {data.map(subscriber => (
                <tr key={subscriber.id} onClick={() => handleRowClick(subscriber.id)}>
                  <td>{subscriber.id}</td>
                  <td>{subscriber.email}</td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSubscribers;
