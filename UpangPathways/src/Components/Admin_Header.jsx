import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin_Header = () => {
    const [username, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/admin/profile', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setName(response.data.name);
            } catch (error) {
                console.error('Error fetching profile');
            }
        };
        fetchProfile();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };
  return (
    <div className=" p-4 flex justify-between">
            <span>{username}</span>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
                Logout
            </button>
    </div>
  )
}

export default Admin_Header