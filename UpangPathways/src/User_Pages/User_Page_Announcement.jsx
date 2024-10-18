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
      
      <div className='grid grid-cols-4 gap-4  '>
      {data.map((announcement_data, index) => {
        return <div key={index} className='flex flex-row '>
          <div className='py-5 px-5 border-2 w-1/2 md:w-full h-30 m-8 rounded-lg shadow-lg border-green-900'>
            <div className='font-medium flex flex-row ltr'>
                <h1 className='font-bold'>{announcement_data.title}</h1>
            </div>
            <div className='font-medium inline p-10'>
                <div className='h-10'>ANNOUNCEMENT</div>
                <div className='h-30 overflow-hidden'>
                <p className='h-20 overflow-hidden' >{announcement_data.announcement}</p>
                </div>
            </div>
            <div>
            <Link className="box-border rounded-lg  h-32 w-32 p-4 border-4 border-green-900" to={`/read/announcement/${announcement_data.ID}`}>See more</Link>
            </div>
          </div>
        </div>
      })}
      </div>
    </div>
  )
}

export default User_Page_Announcement