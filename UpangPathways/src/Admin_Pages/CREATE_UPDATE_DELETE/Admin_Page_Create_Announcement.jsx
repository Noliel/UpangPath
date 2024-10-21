import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Admin_SidePanel from '../../Components/Admin_SidePanel';

const Admin_Page_Create_Announcement = () => {
    const [values, setValues] = useState({
        title: '',
        announcement: '',
    })
    const navigate = useNavigate();
    const handleSubmit = (ev_data) => {
        ev_data.preventDefault();
        axios.post('http://localhost:8000/create/announcement', values)
        .then(res => {
            console.log(res);
            navigate('/admin/announcement')
        })
        .catch(err => console.log(err))
    }
    const handleBack = () => {
        navigate('/admin/announcement');
    };
  return (
    <div className="flex">
            <Admin_SidePanel />
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Creating Event</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block mb-1">Title:</label>
                            <input
                                type="text"
                                placeholder="Enter Title"
                                className="block w-full placeholder-green-800 border border-green-800 rounded-lg p-2"
                                onChange={ev_data => setValues({ ...values, title: ev_data.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="announcement" className="block mb-1">Announcement:</label>
                            <input
                                type="text"
                                placeholder="Enter Announcement"
                                className="block w-full placeholder-green-800 border border-green-800 rounded-lg p-2"
                                onChange={ev_data => setValues({ ...values, announcement: ev_data.target.value })}
                            />
                        </div>
                        <div className="flex space-x-4">
                            <button
                                type="button"
                                className="bg-gray-500 p-3 rounded-lg text-white"
                                onClick={handleBack}
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="bg-green-600 p-3 rounded-lg text-white"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Admin_Page_Create_Announcement