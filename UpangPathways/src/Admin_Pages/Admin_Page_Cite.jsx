import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Admin_SidePanel from '../Components/Admin_SidePanel';

const Admin_Page_Cite = () => {
  const [cites, setCites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      fetchCites();
  }, []);

  const fetchCites = async () => {
      try {
          const response = await axios.get('http://localhost:8000/api/cite');
          setCites(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  const handleDelete = async (id) => {
      try {
          await axios.delete(`http://localhost:8000/api/cite/${id}`);
          fetchCites();
      } catch (error) {
          console.error('Error deleting record:', error);
      }
  };
  return (
    <div className="flex">
    <Admin_SidePanel />
    <div className="flex-1 container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Room List</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => navigate('/admin/cite/add')}
      >
        Add New Room
      </button>
      <div className="grid gap-4">
        {cites.map((cite) => {
          const imageUrl = cite.photo ? `http://localhost:8000/uploads/${cite.photo}` : '';
          return (
            <div key={cite.ID} className="flex items-center space-x-4 border p-4 rounded">
              {imageUrl && <img src={imageUrl} alt="Room" className="w-16 h-16 object-cover" />}
              <div className="flex-1">
                <p className="font-bold">{cite.roomname}</p>
                <p>{cite.description}</p>
              </div>
              <button
                onClick={() => navigate(`/admin/cite/edit/${cite.ID}`)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(cite.ID)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default Admin_Page_Cite