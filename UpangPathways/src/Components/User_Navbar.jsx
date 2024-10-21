import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Container/Logo.png'
import './UseR_Navbar.css'

const User_Navbar = () => {

    const navigate = useNavigate();

    // Function to handle department selection
    const handleDepartmentSelect = (department) => {
        if (department) {
            // Navigate to the selected department's page
            navigate(`/departments/${department}`);
        }
    };

  return (
        <nav className="bg-gray-800 text-white p-4 font-bold">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to={"/"}>
                        <img class="loo" src={logo} />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6 items-center gap-3">
                    <a href="/schoolmap" className="hover:text-gray-300">SCHOOLMAP</a>
                    <a href="/announcement" className="hover:text-gray-300">ANNOUNCEMENT</a>
                    <a href="/suggestion" className="hover:text-gray-300">SUGGESTION</a>
                    {/* Departments Dropdown */}
                    <div className="relative">
                    <select
                    onChange={(e) => handleDepartmentSelect(e.target.value)}
                    className=" p-1 rounded text-white bg-transparent"
                    defaultValue=""
                    >
                        <option className='text-black' value="" disabled>DEPARTMENT</option>
                        <option className='text-black' value="CITE">CITE</option>
                        <option className='text-black' value="CEA">CEA</option>
                        <option className='text-black' value="SHS">SHS</option>
                        <option className='text-black' value="CCJE">CCJE</option>
                        <option className='text-black' value="CELA">CELA</option>
                        <option className='text-black' value="CMA">CMA</option>
                        <option className='text-black' value="CHS">CHS</option>
                        <option className='text-black' value="College of Law">College of Law</option>
                    </select>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default User_Navbar