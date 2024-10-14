import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaTrashAlt } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Admin_Page_Announcement = () => {
  const [data, setData] = useState ([])
    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
      axios.delete('http://localhost:8000/delete/announcement/'+ id)
      .then(res => {
        location.reload();
      })
      .catch(err => console.log(err))
    }
  return (
    <div className='md:w-full'>
      <div className='flex justify-between p-5 shadow-xl center place-items-center'>
        <div>
          <h1 className='font-bold'>Announcement</h1>
        </div>
        <div className='bg-green-600 p-3 rounded-lg text-white cursor-pointer'>
          <Link to="/admin/create/announcement">
            <h1>Create Announcement</h1>
          </Link>
        </div>
      </div>
      <div className='flex'>
      {data.map((announcement_data, index) => {
        return <div key={index} className='flex flex-row'>
          <div className='py-5 px-5 border-2 w-1/2 md:w-full h-32 m-8 rounded-lg shadow-lg'>
            <div className='font-medium flex flex-row ltr'>
                <h1>TITLE</h1>
                <h1 className='ms-8'>{announcement_data.title}</h1>
            </div>
            <div className='font-medium flex flex-row ltr'>
                <h1>ANNOUNCEMENT</h1>
                <h1 className='ms-8'>{announcement_data.announcement}</h1>
            </div>
            <div className='font-medium flex flex-row-reverse ltr mt-2'>
              <Link to={`/admin/edit/announcement/${announcement_data.ID}`}><RiEdit2Line className='ms-2 text-lg cursor-pointer'/></Link>
              <button onClick={() => handleDelete(announcement_data.ID)}><FaTrashAlt className='text-red-500 text-lg cursor-pointer'/></button>
            </div>
          </div>
        </div>
      })}
      </div>
    </div>
  )
}

export default Admin_Page_Announcement