import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../Container/home/img1.jpg'
import img2 from '../Container/home/img2.jpg'
import img3 from '../Container/home/up.png'
import img4 from '../Container/home/upang.jpg'
import './User_Page_Home.css'

const User_Page_Home = () => {
  return (
    <div class='carousel'>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      class="image-container"
      >
        <SwiperSlide className='object-cover'>
        <div className="full-screen-image">
            <div className="overlay-text text-green-600">PHINMA</div>
            <div className='p-text'>UPANG</div>
            <div className='o-text'>DAGUPAN</div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="full-screen-image2">
            <div className="overlay-text text-green-600">PHINMA</div>
            <div className='p-text'>UPANG</div>
            <div className='o-text'>DAGUPAN</div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="full-screen-image3">
          <div className="overlay-text text-green-600">PHINMA</div>
          <div className='p-text'>UPANG</div>
          <div className='o-text'>DAGUPAN</div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="full-screen-image4">
          <div className="overlay-text text-green-600">PHINMA</div>
          <div className='p-text'>UPANG</div>
          <div className='o-text'>DAGUPAN</div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default User_Page_Home