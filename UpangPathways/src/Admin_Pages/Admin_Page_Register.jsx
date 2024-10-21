import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin_Page_Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/register', { username, password });
            alert('Registration successful. Please log in.');
            navigate('/admin/login');
        } catch (error) {
            alert('Registration failed. The username may already be taken.');
        }
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Admin Registration</h2>
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
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Register</button>
            </form>
    </div>
  )
}

export default Admin_Page_Register