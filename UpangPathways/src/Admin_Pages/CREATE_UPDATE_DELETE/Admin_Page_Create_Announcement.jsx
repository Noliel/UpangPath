import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
  return (
    <div className='md:w-full'>
        <div className='flex justify-between p-5 shadow-xl center place-items-center'>
          <h1 className='font-bold'>Event Dashboard</h1>
        </div>
        <div className='p-5 md:w-full grid grid-cols-3 gap-4 content-center '>
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <h2>CREATING EVENT </h2>
                    <div>
                        <label htmlFor=''>Title: </label>
                        <input class="placeholder-green-800 border border-green-800 rounded-lg" type='text' placeholder='Enter Title'
                        onChange={ev_data => setValues({...values, title: ev_data.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor=''>Announcement:  </label>
                        <input class="placeholder-green-800 border border-green-800 rounded-lg" type='text' placeholder='Enter Announcement'
                        onChange={ev_data => setValues({...values, announcement: ev_data.target.value})}
                        />
                    </div>
                    <button className='bg-green-600 p-3 rounded-lg text-white'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Admin_Page_Create_Announcement