import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import User_Navbar from '../Components/User_Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-fade'; // Import effect fade styles
import { Autoplay, EffectFade } from 'swiper/modules';
import './User_Page_Home.css'; // Custom CSS for animations


const User_Page_Announcement = () => {
  const [data, setData] = useState ([])
    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='md:w-full'>
      <User_Navbar />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                loop={true}
        pagination={{ clickable: true }}
        className="mt-3"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-80 bg-blue-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Welcome to the Announcement Page!</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-80 bg-green-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Check out the latest updates below!</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-80 bg-purple-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Stay tuned for more announcements.</h2>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='grid grid-cols-4 gap-4  '>
      {data.map((announcement_data, index) => {
        return <div key={index} className='flex flex-row '>
          <div className='py-5 px-5 border-2 w-1/2 md:w-full h-30 m-8 rounded-lg shadow-lg border-green-900'>
            <div className='font-medium flex flex-row ltr'>
                <h1 className='font-bold'>{announcement_data.title}</h1>
            </div>
            <div className='font-medium inline p-10'>
                <div className='h-30 overflow-hidden'>
                <p className='h-20 overflow-hidden' >{announcement_data.announcement}</p>
                </div>
            </div>
            <div>
            <Link className="box-border rounded-full  h-32 w-32 p-3  bg-slate-500 text-white hover:bg-gray-950 delay-100" to={`/read/announcement/${announcement_data.ID}`}>Read more</Link>
            </div>
          </div>
        </div>
      })}
      </div>
    </div>
  )
}

export default User_Page_Announcement