import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Admin_SidePanel from '../../Components/Admin_SidePanel'


const Admin_Page_Edit_Announcement = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/read/announcement/' +id)
        .then(res => {
            console.log(res)
            setValues({...values, title: res.data[0].title, announcement: res.data[0].announcement})
        })
        .catch(err => console.log(err))
    }, [])
    const [values, setValues] = useState({
        title: '',
        announcement: '',
    })
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8000/update/announcement/' +id, values)
        .then(res => {
            console.log(res)
            navigate('/admin/announcement')
        }).catch(err => console.log(err))
    }
  return (
    <div className="flex">
            <Admin_SidePanel />
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Edit Announcement</h1>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block mb-1">Title:</label>
                            <input
                                type="text"
                                placeholder="Enter Title"
                                value={values.title}
                                className="block w-full placeholder-green-800 border border-green-800 rounded-lg p-2"
                                onChange={(ev_data) => setValues({ ...values, title: ev_data.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="announcement" className="block mb-1">Announcement:</label>
                            <input
                                type="text"
                                placeholder="Enter Announcement"
                                value={values.announcement}
                                className="block w-full placeholder-green-800 border border-green-800 rounded-lg p-2"
                                onChange={(ev_data) => setValues({ ...values, announcement: ev_data.target.value })}
                            />
                        </div>
                        <div className="flex space-x-4">
                            <button
                                type="button"
                                className="bg-gray-500 p-3 rounded-lg text-white"
                                onClick={() => navigate('/admin/announcement')}
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="bg-green-600 p-3 rounded-lg text-white"
                            >
                                Done
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Admin_Page_Edit_Announcement