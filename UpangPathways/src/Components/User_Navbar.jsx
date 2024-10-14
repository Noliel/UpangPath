import React from 'react'
import { Link } from 'react-router-dom'

const User_Navbar = () => {
  return (
    <div className='flex justify-around bg-lime-900 py-3'>
        <div>
            <Link to="/home">
            <h1 className='text-2xl text-teal-300'>UPANG PATHWAYS</h1>
            </Link>
        </div>
        <div className='text-white'>
            <ul className='flex items-center gap-10'>
                <Link to="/schoolmap">
                    <li className='hover:text-green-700 duration-300'>School Map</li>
                </Link>
                <Link to="/announcement">
                    <li className='hover:text-green-700 duration-300'>Announcement</li>
                </Link>
                <Link to="/findroom">
                <li className='hover:text-green-700 duration-300'>Find Room</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default User_Navbar