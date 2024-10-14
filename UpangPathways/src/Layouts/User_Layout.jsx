import React from 'react'
import { Outlet } from 'react-router-dom'
import User_Navbar from '../Components/User_Navbar'

const User_Layout = () => {
  return (
    <div>
        <User_Navbar/>
        <Outlet/>
    </div>
  )
}

export default User_Layout