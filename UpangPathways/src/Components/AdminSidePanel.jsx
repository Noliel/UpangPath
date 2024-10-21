import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBullhorn, FaQuoteRight, FaUser, FaSignOutAlt } from 'react-icons/fa';

function AdminSidePanel() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the JWT token
        navigate('/admin/login'); // Redirect to the login page
    };
    return (
        <div className="w-64 h-screen bg-gray-800 text-white fixed flex flex-col">
            <div className="flex items-center justify-between p-4 bg-gray-900">
                <span className="text-lg font-bold">Admin Panel</span>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-2 py-1 rounded text-sm flex items-center"
                >
                    <FaSignOutAlt className="mr-1" /> Logout
                </button>
            </div>
            <nav className="flex flex-col p-4 flex-grow">
                <Link to="/" className="mb-2 flex items-center hover:bg-gray-700 p-2 rounded">
                    <FaHome className="mr-2" /> Home
                </Link>
                <Link to="/admin/announcement" className="mb-2 flex items-center hover:bg-gray-700 p-2 rounded">
                    <FaBullhorn className="mr-2" /> Announcements
                </Link>
                <Link to="/admin/cite" className="mb-2 flex items-center hover:bg-gray-700 p-2 rounded">
                    <FaQuoteRight className="mr-2" /> Cite
                </Link>
                <Link to="/admin/profile" className="mb-2 flex items-center hover:bg-gray-700 p-2 rounded">
                    <FaUser className="mr-2" /> Profile
                </Link>
            </nav>
        </div>
    );
}

export default AdminSidePanel;
