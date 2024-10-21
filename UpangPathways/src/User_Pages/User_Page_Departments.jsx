import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User_Navbar from '../Components/User_Navbar';
import { useParams } from 'react-router-dom';

const User_Page_Departments = () => {
    const { department } = useParams(); // Get the department from the URL
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetchDepartments();
    }, [department]); // Refetch data whenever the department changes

    const fetchDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/departments', {
                params: { department: department }
            });
            setDepartments(response.data);
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };
  return (
        <div>
            <User_Navbar />
            <h1 className="text-2xl mt-4 text-center font-bold">{department} DEPARTMENT</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {departments.map(dept => (
                    <div key={dept.ID} className="p-4 border rounded text-center ml-5">
                        <img
                                src={`http://localhost:8000/uploads/${dept.photo}`}
                                alt={`${dept.department} photo`}
                                className="mx-auto mb-4" // Center the image
                                style={{ maxHeight: '300px', objectFit: 'contain', width: '100%' }} // Optional styling
                            />
                        <h2 className="text-xl font-semibold">{dept.roomname}</h2>
                        <p>{dept.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User_Page_Departments