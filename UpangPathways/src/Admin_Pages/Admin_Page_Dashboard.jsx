import React, { useEffect, useState } from 'react';
import Admin_SidePanel from "../Components/Admin_SidePanel";
import axios from 'axios';

const Admin_Page_Dashboard = () => {
    const [newSuggestionsCount, setNewSuggestionsCount] = useState(0);

    useEffect(() => {
        const fetchSuggestionsCount = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/suggestions');
                setNewSuggestionsCount(response.data.length);
            } catch (error) {
                console.error('Error fetching suggestions count:', error);
            }
        };

        fetchSuggestionsCount();
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-200">
            <Admin_SidePanel notifierNumber={newSuggestionsCount} />
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
                <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">New Suggestions</h2>
                    <p className="text-lg text-gray-600">
                        You have <span className="font-bold text-blue-500">{newSuggestionsCount}</span> new suggestions to review.
                    </p>
                </div>

                {/* Additional Stats or Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-700">Total Suggestions</h3>
                        <p className="text-2xl font-bold text-gray-900">{newSuggestionsCount}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-700">Pending Reviews</h3>
                        <p className="text-2xl font-bold text-gray-900">0</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-700">Resolved Suggestions</h3>
                        <p className="text-2xl font-bold text-gray-900">0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin_Page_Dashboard;