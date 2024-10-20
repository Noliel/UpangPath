import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Container/Logo.png'
import './UseR_Navbar.css'

const User_Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

  return (
<nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to={"/"}>
                        <img class="loo" src={logo} />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <a href="/schoolmap" className="hover:text-gray-300">SCHOOLMAP</a>
                    <a href="/announcement" className="hover:text-gray-300">ANNOUNCEMENT</a>

                    {/* Departments Dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="hover:text-gray-300 focus:outline-none"
                        >
                            DEPARTMENTS
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-0 bg-white text-black rounded-md shadow-lg mt-2 w-48 z-30">
                                <a href="/cite" className="block px-4 py-2 hover:bg-gray-200">CITE</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">CEA</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">SHS</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">CCJE</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">CELA</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">CMA</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">CHS</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-200">COLLEGE OF LAW</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default User_Navbar