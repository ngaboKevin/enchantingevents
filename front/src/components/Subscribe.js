import React,{useState} from 'react';
import axios from 'axios';
export default function Subscribe(){

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/subscribe', { email });
           // const res = await axios.post ('http://localhost:5000/subscribe',{email});
            setMessage(response.data);
            setEmail('');
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setMessage('This email is already subscribed');
            } else {
                setMessage('An error occurred. Please try again later.');
            }
        }
    };
    return(
        <div className="subscribe-container">
    <h2>Subscribe to Our Newsletter</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-row">
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Subscribe</button>
        </div>
    </form>
    {message && <p>{message}</p>}
</div>
    )
}
