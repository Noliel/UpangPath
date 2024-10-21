import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Admin_SidePanel from '../../Components/Admin_SidePanel';

const Admin_Page_Create_Departments = () => {
    const [roomName, setRoomName] = useState('');
    const [description, setDescription] = useState('');
    const [department, setDepartment] = useState('');
    const [photo, setPhoto] = useState(null);

    const navigate = useNavigate()

    const handleCreate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('roomname', roomName);
        formData.append('description', description);
        formData.append('department', department);
        formData.append('photo', photo);

        try {
            await axios.post('http://localhost:8000/api/departments', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Department created successfully');
            navigate('/admin/departments')
        } catch (error) {
            console.error('Error creating department:', error);
            alert('Failed to create department');
        }
    };

    return (
        <div className='flex'>
            <div className=' h-screen text-white'>
                <Admin_SidePanel />
            </div>
        <form onSubmit={handleCreate} className="p-4">
            
            <h2 className="text-2xl mb-4">Create Department</h2>
            <input
                type="text"
                placeholder="Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            />
            <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            >
                <option value="">Select Department</option>
                <option value="CITE">CITE</option>
                <option value="CEA">CEA</option>
                <option value="SHS">SHS</option>
                <option value="CCJE">CCJE</option>
                <option value="CELA">CELA</option>
                <option value="CMA">CMA</option>
                <option value="CHS">CHS</option>
                <option value="College of Law">College of Law</option>
            </select>
            <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="border p-2 rounded w-full mb-4"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
        </form>
        </div>
    );
};

export default Admin_Page_Create_Departments;
