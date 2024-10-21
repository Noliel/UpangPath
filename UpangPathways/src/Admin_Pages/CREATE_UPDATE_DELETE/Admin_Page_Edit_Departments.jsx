import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Admin_SidePanel from '../../Components/Admin_SidePanel';

const Admin_Page_Edit_Departments = () => {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);
    const [roomname, setRoomname] = useState('');
    const [description, setDescription] = useState('');
    const [department, setDepartment] = useState('');
    const [existingPhoto, setExistingPhoto] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/departments/${id}`);
            setRoomname(response.data.roomname);
            setDescription(response.data.description);
            setDepartment(response.data.department)
            setExistingPhoto(department.photo);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('roomname', roomname);
        formData.append('description', description);
        formData.append('department', department);
        if (photo) {
            formData.append('photo', photo); // Only append if a new photo is uploaded
        }

        try {
            await axios.put(`http://localhost:8000/api/departments/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Department updated successfully');
            navigate('/admin/departments'); // Redirect back to departments list
        } catch (error) {
            console.error('Error updating department:', error);
            alert('Failed to update department');
        }
    };

    return (
        <div className="flex">
            <Admin_SidePanel />
            <div className="flex-1 container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Edit Room</h1>
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="mb-4">
                    {existingPhoto && (
                        <img src={`http://localhost:8000/uploads/${existingPhoto}`} alt="Existing" className="w-full mb-2"/>
                    )}
                    <input
                        type="file"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        className="border p-2 rounded w-full"
                    />
                    </div>
                    <input
                        type="text"
                        placeholder="Room Name"
                        value={roomname}
                        onChange={(e) => setRoomname(e.target.value)}
                        className="block w-full border p-2 rounded"
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full border p-2 rounded"
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
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Update Room
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin_Page_Edit_Departments;
