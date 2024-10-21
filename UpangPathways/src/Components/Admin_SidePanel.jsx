import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsBuildingFillAdd } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useNotifications } from '../Context/NotificationContext'; // Ensure this path is correct

const Admin_SidePanel = () => {
    const { notificationCount } = useNotifications(); // Access notification count
    const menus = [
        { name: "Announcement", link: '/admin/announcement', icon: TfiAnnouncement },
        { name: "CITE", link: '/admin/cite', icon: BsBuildingFillAdd },
        { name: "SUGGESTION", link: '/admin/suggestions', icon: CiStar },
    ];
    const [open, setOpen] = useState(true);

    return (
        <section className={`${open ? 'w-72' : 'w-16'} duration-500`}>
            <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4`}>
                <div className='py-3 flex justify-end'>
                    <HiMenuAlt3 size={26} className='cursor-pointer' onClick={() => setOpen(!open)} />
                </div>
                <div className='mt-4 flex flex-col gap-4 relative'>
                    {menus.map((menu, i) => (
                        <Link to={menu.link} key={i} className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md'>
                            <div>{React.createElement(menu.icon, { size: "20" })}</div>
                            <h2 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                                {menu.name}
                                {menu.name === "SUGGESTION" && open && (
                                    <span className="ml-2 bg-red-500 text-white rounded-full px-2 text-xs">
                                        {notificationCount}
                                    </span>
                                )}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Admin_SidePanel;