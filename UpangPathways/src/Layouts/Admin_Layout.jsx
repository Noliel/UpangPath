import React from 'react'
import Admin_SidePanel from '../Components/Admin_SidePanel'
import { Outlet } from 'react-router-dom'

const Admin_Layout = () => {
  return (
    <div className='flex'>
        <Admin_SidePanel />
        <Outlet />
    </div>
  )
}

export default Admin_Layout