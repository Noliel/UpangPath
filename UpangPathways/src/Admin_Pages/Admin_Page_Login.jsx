import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin_Page_Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', { username, password });
            localStorage.setItem('token', response.data.token);
            navigate('/admin'); // Redirect to admin home page on successful login
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="border p-2 w-full"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Login</button>
            </form>
        </div>
  )
}

export default Admin_Page_Login