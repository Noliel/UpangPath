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
    <div>
      <div>
        <h2>ANNOUNCEMENT</h2>
        <h2>{announcement_data.title}</h2>
        <h2>{announcement_data.announcement}</h2>
        <Link to="/announcement">Back</Link>
      </div>
    </div>
  )
}
export default User_Page_Read_Announcement