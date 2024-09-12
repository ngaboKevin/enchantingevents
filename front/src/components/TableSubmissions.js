import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Table.css';

const TableSubmission = () => {
  const [data, setData] = useState([]);
  const { submissions } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/submissions`)
      .then(response => setData(response.data))
      .catch(error => console.error(`Error fetching ${submissions} data:`, error));
  }, [submissions]);

  const handleRowClick = (id) => {
    navigate(`/detail/submissions/${id}`);
  };

  return (
    <div className="table-container">
      <h2>Job applications</h2>
      <table>
        <thead>
          <tr>
            {/* Define table headers based on the data structure */}
            <th>ID</th>
                <th>Names</th>
                <th>Email</th>
                <th>Profession</th>
                <th>Phone</th>
                <th>Message</th>
                <th>CV</th>
                <th>Date submitted</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
        {data.map(submission => (
                <tr key={submission.id} onClick={() => handleRowClick(submission.id)}>
                  <td>{submission.id}</td>
                  <td>{submission.names}</td>
                  <td>{submission.email}</td>
                  <td>{submission.profession}</td>
                  <td>{submission.phone}</td>
                  <td>{submission.message}</td>
                  <td>{submission.cv}</td>
                  <td>{new Date(submission.submitted_at).toLocaleString()}</td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSubmission;
