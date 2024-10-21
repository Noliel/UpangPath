import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { useNotifications } from '../Context/NotificationContext'; // Ensure this path is correct
import Admin_SidePanel from '../Components/Admin_SidePanel';

const Admin_Page_Suggestion = () => {
    const [data, setData] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('CITE'); // Default department
    const { setNotificationCount } = useNotifications(); // Access notification context

    const departments = [
        'CITE',
        'CEA',
        'SHS',
        'CCJE',
        'CELA',
        'CMA',
        'CHS',
        'COLLEGE OF LAW'
    ];

    useEffect(() => {
        fetchSuggestions(selectedDepartment);
    }, [selectedDepartment]);

    const fetchSuggestions = (department) => {
        axios.get(`http://localhost:8000/api/suggestions?department=${department}`)
            .then(res => {
                console.log('Fetched suggestions:', res.data);
                setData(res.data);
                // Update the notification count based on fetched suggestions
                setNotificationCount(res.data.length);
            })
            .catch(err => {
                console.error('Error fetching suggestions:', err);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/suggestions/${id}`)
            .then(res => {
                setData(data.filter(suggestion => suggestion.ID !== id)); // Remove deleted suggestion
                // Optionally, update notification count after deletion
                setNotificationCount(prevCount => prevCount - 1);
            })
            .catch(err => {
                console.error('Error deleting suggestion:', err);
            });
    };

    return (
         <div className='flex'>
            <Admin_SidePanel />
            <div className='flex-1 p-6'>
                <h1 className='text-2xl font-semibold mb-4'>Suggestions</h1>
                <div className='mb-4'>
                    <select
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className='p-2 border rounded'
                    >
                        {departments.map((dept) => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {data.map((suggestion) => (
                        <div key={suggestion.ID} className='border p-4 rounded shadow flex flex-col justify-between'>
                            <div>
                                <h2 className='text-lg font-medium'>{suggestion.department}</h2>
                                <p className='mt-2'>{suggestion.suggestion}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(suggestion.ID)}
                                className='mt-4 bg-red-500 text-white px-3 py-1 rounded self-end'
                            >
                                <FaTrashAlt className='inline mr-2' /> Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Admin_Page_Suggestion;