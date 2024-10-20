import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Admin_SidePanel from '../../Components/Admin_SidePanel';

const Admin_Page_Edit_Cite = () => {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);
    const [roomname, setRoomname] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchCite();
    }, []);

    const fetchCite = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/cite/${id}`);
            setRoomname(response.data.roomname);
            setDescription(response.data.description);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        if (photo) formData.append('photo', photo);
        formData.append('roomname', roomname);
        formData.append('description', description);

        try {
            await axios.put(`http://localhost:8000/api/cite/${id}`, formData);
            navigate('/');
        } catch (error) {
            console.error('Error updating record:', error);
        }
    };

    return (
        <div className="flex">
            <Admin_SidePanel />
            <div className="flex-1 container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Edit Room</h1>
                <form onSubmit={handleUpdate} className="space-y-4">
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
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Update Room
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin_Page_Edit_Cite;
