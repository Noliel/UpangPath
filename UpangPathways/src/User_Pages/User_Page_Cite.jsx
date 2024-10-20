import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User_Navbar from '../Components/User_Navbar';

const User_Page_Cite = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch all data when the component is mounted
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/cite');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
  return (
    <div>
        <User_Navbar />
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-8 text-center">CITE DEPARTMENT</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-md">
                        <img
                            src={`http://localhost:8000/uploads/${item.photo}`}
                            alt={item.roomname}
                            className="w-full h-48 object-contain rounded-lg mb-4"
                        />
                        <div className="text-center">
                            <p className="font-bold text-lg">{item.roomname}</p>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default User_Page_Cite