import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin_Page_Profile() {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch the admin profile
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/admin/profile', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setError('Error fetching profile. Please log in again.');
            }
        };
        fetchProfile();
    }, []);

    if (error) {
        return <div className="text-red-500 text-center mt-4">{error}</div>;
    }

    if (!profile) {
        return <div className="text-center mt-4">Loading profile...</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>
                <p><strong>ID:</strong> {profile.Id}</p>
                <p><strong>Username:</strong> {profile.username}</p>
            </div>
        </div>
    );
}

export default Admin_Page_Profile;
