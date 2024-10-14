import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const User_Page_Announcement = () => {
  const [data, setData] = useState ([])
    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='md:w-full'>
      <div className='flex'>
      {data.map((announcement_data, index) => {
        return <div key={index} className='flex flex-row'>
          <div className='py-5 px-5 border-2 w-1/2 md:w-full h-32 m-8 rounded-lg shadow-lg'>
            <div className='font-medium flex flex-row ltr'>
                <h1>DATE</h1>
                <h1 className='ms-8'>{announcement_data.title}</h1>
            </div>
            <div className='font-medium flex flex-row ltr'>
                <h1>TITLE</h1>
                <h1 className='ms-8'>{announcement_data.announcement}</h1>
            </div>
            <Link to={`/read/announcement/${announcement_data.ID}`}>See more</Link>
          </div>
        </div>
      })}
      </div>
    </div>
  )
}

export default User_Page_Announcement