import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { useNotifications } from '../Context/NotificationContext'; // Ensure this path is correct

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
        <div className='md:w-full'>
            <div className='flex justify-between p-5 shadow-xl'>
                <h1 className='font-bold'>Suggestions for {selectedDepartment}</h1>
                
                {/* Department Selection Dropdown */}
                <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                    {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                    ))}
                </select>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {data.length > 0 ? data.map((suggestion_data) => (
                    <div key={suggestion_data.ID} className='flex flex-row'>
                        <div className='py-1 px-1 border-2 w-1/2 md:w-full h-20 m-0 rounded-lg overflow-hidden shadow-lg'>
                            <div className='font-medium flex flex-row'>
                                <h1 className='font-bold'>Department:</h1>
                                <h1 className='ms-2'>{suggestion_data.department}</h1>
                            </div>
                            <div className='font-medium flex flex-row'>
                                <h1 className='font-bold'>Suggestion:</h1>
                                <h1 className='ms-2'>{suggestion_data.suggestion}</h1>
                            </div>
                            <div className='font-medium flex flex-row-reverse mt-2'>
                                <button onClick={() => handleDelete(suggestion_data.ID)}>
                                    <FaTrashAlt className='text-red-500 text-lg cursor-pointer' />
                                </button>
                            </div>
                        </div>
                    </div>
                )) : (
                    <p>No suggestions available for this department.</p>
                )}
            </div>
        </div>
    );
};

export default Admin_Page_Suggestion;