import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Container/Logo.png'
import './UseR_Navbar.css'

const User_Navbar = () => {
  return (
    <div className='flex justify-around bg-lime-900 py-3 place-items-center'>
        <div>
            <Link to="/">
            <img  class="loo" src={logo} />
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
            </ul>
        </div>
    </div>
  )
}

export default User_Navbar