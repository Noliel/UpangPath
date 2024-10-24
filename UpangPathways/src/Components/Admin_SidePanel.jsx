import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiPhoneFindFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom'
import { BsBuildingFillAdd } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useNotifications } from '../Context/NotificationContext';


const Admin_SidePanel = () => {
    const { notificationCount } = useNotifications();
    const menus = [
        {name:"Announcement", link:'/admin/announcement', icon: TfiAnnouncement},
        {name:"Departments", link:'/admin/departments', icon: BsBuildingFillAdd},
        {name:"Suggestion", link:'/admin/suggestions', icon: FaRegLightbulb}, 
    ];
    const [open, setOpen] = useState(true);

    const navigate = useNavigate();

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };
  return (
    <section className="flex gap-6">
            <div className={`bg-[#0e0e0e] min-h-screen ${ open ? "w-72" : "w-16" } duration-500 text-gray-100 px-4 flex flex-col justify-between`}>
                <div>
                    <div className="py-3 flex justify-end">
                        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
                    </div>
                    <div className="mt-4 flex flex-col gap-4 relative">
                        {menus.map((menu, i) => (
                            <Link to={menu.link} key={i} className={`${ menu.margin && "mt-5"} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                                <h2 style={{ transitionDelay: `${i + 3}00ms`, }} className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                                    {menu.name}
                                    {menu.name === "Suggestion" && open && (
                                    <span className="ml-2 bg-red-500 text-white rounded-full px-2 text-xs">
                                        {notificationCount}
                                    </span>
                                )}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="p-4">
                <div className="mb-4">
                    <Link
                        to="/"
                        className="flex items-center gap-3.5 p-2 hover:bg-gray-800 rounded-md"
                    >
                        <IoIosHome size={20} />
                        <span className={`${!open && "hidden"} text-sm font-medium`}>
                            Home for user
                        </span>
                    </Link>
                </div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 px-4 py-2 rounded w-full flex items-center justify-center"
                    >
                        <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Admin_SidePanel