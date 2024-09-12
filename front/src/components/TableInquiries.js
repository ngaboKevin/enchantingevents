import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Table.css';

const TableInquiries = () => {
  const [data, setData] = useState([]);
  const { inquiries } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/inquiries`)
      .then(response => setData(response.data))
      .catch(error => console.error(`Error fetching ${inquiries} data:`, error));
  }, [inquiries]);

  const handleRowClick = (id) => {
    navigate(`/detail/inquiries/${id}`);
  };

  return (
    <div className="table-container">
      <h2>Inquiries</h2>
      <table>
        <thead>
          <tr>
            {/* Define table headers based on the data structure */}
            <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Created At</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
        {data.map(inquiry => (
                <tr key={inquiry.id} onClick={() => handleRowClick(inquiry.id)}>
                  <td>{inquiry.id}</td>
                  <td>{inquiry.namees}</td>
                  <td>{inquiry.email}</td>
                  <td>{inquiry.message}</td>
                  <td>{new Date(inquiry.created_at).toLocaleString()}</td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableInquiries;
