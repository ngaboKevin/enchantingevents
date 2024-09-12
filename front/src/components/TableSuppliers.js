import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Table.css';

const TableSuppliers = () => {
  const [data, setData] = useState([]);
  const { suppliers } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/suppliers`)
      .then(response => setData(response.data))
      .catch(error => console.error(`Error fetching ${suppliers} data:`, error));
  }, [suppliers]);

  const handleRowClick = (id) => {
    navigate(`/detail/suppliers/${id}`);
  };

  return (
    <div className="table-container">
      <h2>Suppliers</h2>
      <table>
        <thead>
          <tr>
            {/* Define table headers based on the data structure */}
            <th>ID</th>
                <th>Names</th>
                <th>Email</th>
                <th>Service</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Message</th>
                <th>CV</th>
                <th>Date submitted</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
        {data.map(supplier => (
                <tr key={supplier.id} onClick={() => handleRowClick(supplier.id)}>
                  <td>{supplier.id}</td>
                  <td>{supplier.names}</td>
                  <td>{supplier.email}</td>
                  <td>{supplier.services}</td>
                  <td>{supplier.price}</td>
                  <td>{supplier.phone}</td>
                  <td>{supplier.message}</td>
                  <td>{supplier.cv}</td>
                  <td>{new Date(supplier.submitted_at).toLocaleString()}</td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSuppliers;
