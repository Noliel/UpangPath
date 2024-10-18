import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiPhoneFindFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Admin_SidePanel = () => {
    const menus = [
        /* {name:"Dashboard", link:'/admin', icon: MdOutlineDashboard}, */
        {name:"Announcement", link:'/admin/announcement', icon: TfiAnnouncement},
        /* {name:"Event", link:'/admin/event', icon: MdEvent},
        {name:"Find Room", link:'/admin/findroom', icon: RiPhoneFindFill}, */
    ];
    const [open, setOpen] = useState(true);
  return (
    <section className={`${open ? 'w-72': 'w-16'} duration-500`}>
        <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72': 'w-16'} duration-500 text-gray-100 px-4`}>
            <div className='py-3 flex justify-end'>
                <HiMenuAlt3 size={26} className='cursor-pointer'
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className='mt-4 flex flex-col gap-4 relative'>
                {menus?.map((menu, i) => (
                    <Link to={menu?.link} key={i} className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded.md'>
                        <div>{React.createElement(menu?.icon, {size:"20"})}</div>
                        <h2
                            style={{
                                transitionDelay: `${i + 3}00ms`
                            }}                        
                            className={`whitespace-pre duration-500 ${ !open && "opacity-0 translate-x-28 overflow-hidden"}`}
                        >{menu?.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Admin_SidePanel