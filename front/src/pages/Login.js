// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import the CSS file for form styling
import logo from '../images/enchanting event logo.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email,
                password
            });

            localStorage.setItem('token', response.data.token);
            history('/dashboard');
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <div className='main'>
            <img src={logo} alt="Company Logo" className="logo" />
        <div className="form-container">
            <center>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            </center>
        </div>
        </div>
    );
};

export default Login;