import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Admin_SidePanel from '../Components/Admin_SidePanel';

const Admin_Page_Departments = () => {
  const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchDepartments();
    }, [selectedDepartment]);

    // Fetch the list of departments from the server
    const fetchDepartments = async () => {
      try {
          const response = await axios.get('http://localhost:8000/api/departments', {
              params: { department: selectedDepartment }
          });
          setDepartments(response.data);
      } catch (error) {
          console.error('Error fetching departments:', error);
      }
  };
    const handleCreateRoom = () => {
      navigate('/admin/departments/add');
  };

    // Handle deleting a department
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this department?')) {
            try {
                await axios.delete(`http://localhost:8000/api/departments/${id}`);
                alert('Department deleted successfully');
                fetchDepartments(); // Refresh the list
            } catch (error) {
                console.error('Error deleting department:', error);
                alert('Failed to delete department');
            }
        }
    };

    // Handle navigating to the edit page
    const handleEdit = (id) => {
        navigate(`/admin/departments/edit/${id}`); // Navigate to the edit page with the department ID
    };
  return (
    <div className='flex'>
      <Admin_SidePanel />
      <div className="flex-1 container mx-auto p-4">
      <h1 className="text-2xl mb-4 font-roboto">DEPARTMENTS</h1>
    {/* Create Room Button */}
    <div className='flex justify-between'>
    <button
        onClick={handleCreateRoom}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
    >
        Create Room
    </button>
    {/* Dropdown to filter departments */}
    <select
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
        className="border-2 p-2 rounded mb-4 font-bold"
    >
        <option value="">ALL DEPARTMENTS</option>
        <option value="CITE">CITE</option>
        <option value="CEA">CEA</option>
        <option value="SHS">SHS</option>
        <option value="CCJE">CCJE</option>
        <option value="CELA">CELA</option>
        <option value="CMA">CMA</option>
        <option value="CHS">CHS</option>
        <option value="College of Law">College of Law</option>
    </select>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {departments.map(department => (
                    <div key={department.ID} className="p-4 border rounded text-center">
                        {/* Display the image */}
                        {department.photo && (
                            <img
                                src={`http://localhost:8000/uploads/${department.photo}`}
                                alt="Department"
                                className="w-full mb-2"
                                style={{ maxHeight: '200px', objectFit: 'contain', width: '100%' }}
                            />
                        )}
                        <h2 className="text-xl font-semibold">{department.roomname}</h2>
                        <p>{department.description}</p>
                        <p><strong>Department:</strong> {department.department}</p>
                        <div className="mt-2">
                            <button
                                onClick={() => handleEdit(department.ID)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(department.ID)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
    </div>
      </div>
    </div>
  )
}

export default Admin_Page_Departments