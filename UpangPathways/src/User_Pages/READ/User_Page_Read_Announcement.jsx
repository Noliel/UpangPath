import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function User_Page_Read_Announcement() {
    const {id} = useParams();
    const [announcement_data, setAnnouncement_data] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/read/announcement/' +id)
        .then(res => {
          console.log(res)
          setAnnouncement_data(res.data[0])
        })
        .catch(err => console.log(err))
    }, [])
  return(
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className='font-bold'>{announcement_data.title}</h2>
        <div className='overflow my-5'>
        <p>{announcement_data.announcement}</p>
        </div>
        <Link className="border-2 border-blue-500 p-3 rounded-lg" to="/announcement">Back</Link>
      </div>
    </div>
  )
}
export default User_Page_Read_Announcement