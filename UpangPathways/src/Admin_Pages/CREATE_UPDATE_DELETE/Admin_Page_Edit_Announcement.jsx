import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


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
    <div className='md:w-full'>
        <div className='flex justify-between p-5 shadow-xl center place-items-center'>
          <h1 className='font-bold'>Announcement Dashboard</h1>
        </div>
        <div className='p-5 md:w-full grid grid-cols-3 gap-4 content-center '>
            <div className=''>
                <form onSubmit={handleUpdate}>
                    <h2>EDIT ANNOUNCEMENT </h2>
                    <div>
                        <label htmlFor=''>Title: </label>
                        <input class="placeholder-green-800 border border-green-800 rounded-lg" type='text' placeholder='Enter Title' value={values.title}
                        onChange={ev_data => setValues({...values, title: ev_data.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor=''>Announcement:  </label>
                        <input class="placeholder-green-800 border border-green-800 rounded-lg" type='text' placeholder='Enter Announcement' value={values.announcement}
                        onChange={ev_data => setValues({...values, announcement: ev_data.target.value})}
                        />
                    </div>
                    <button className='bg-green-600 p-3 rounded-lg text-white'>Done</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Admin_Page_Edit_Announcement