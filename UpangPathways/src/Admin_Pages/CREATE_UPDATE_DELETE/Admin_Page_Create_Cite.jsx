import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Admin_SidePanel from '../../Components/Admin_SidePanel';

const Admin_Page_Create_Cite = () => {
    const [photo, setPhoto] = useState(null);
    const [roomname, setRoomname] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleAdd = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('roomname', roomname);
        formData.append('description', description);

        try {
            await axios.post('http://localhost:8000/api/cite', formData);
            navigate('/admin/cite');
        } catch (error) {
            console.error('Error adding room:', error);
        }
    };

    return (
        <div className="flex">
            <Admin_SidePanel />
            <div className="flex-1 container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Add New Room</h1>
                <form onSubmit={handleAdd} className="space-y-4">
                    <input
                        type="file"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        className="block w-full border p-2 rounded"
                    />
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
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add Room
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin_Page_Create_Cite;
