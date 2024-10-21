import React, { useState } from 'react';
import axios from 'axios';
import './user_page_suggestion.css';
import { useNotifications } from '../Context/NotificationContext'; // Ensure this path is correct

const User_Page_Suggestion = () => {
    const [suggestion, setSuggestion] = useState('');
    const [department, setDepartment] = useState('CITE'); // Default department
    const [message, setMessage] = useState('');
    const { setNotificationCount } = useNotifications(); // Access context

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSuggestion = { suggestion, department };

        axios.post('http://localhost:8000/api/suggestions', newSuggestion)
            .then(res => {
                setMessage('Suggestion submitted successfully!');
                setSuggestion('');
                setNotificationCount(prevCount => prevCount + 1); // Update notification count
            })
            .catch(err => {
                console.error('Error submitting suggestion:', err);
                setMessage('Error submitting suggestion.');
            });
    };

    return (
        <div className="suggestion-form">
            <h1>Submit Your Suggestion</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Department:</label>
                    <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                        {departments.map((dept, index) => (
                            <option key={index} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Suggestion:</label>
                    <textarea value={suggestion} onChange={(e) => setSuggestion(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default User_Page_Suggestion;
