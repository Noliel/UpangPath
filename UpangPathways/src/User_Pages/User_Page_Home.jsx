// User_Page_Home.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-fade'; // Import effect fade styles
import { Autoplay, EffectFade } from 'swiper/modules';
import './User_Page_Home.css'; // Custom CSS for animations
import img1 from '../Container/home/img1.jpg'
import img2 from '../Container/home/img2.jpg'
import img3 from '../Container/home/up.png'

const User_Page_Home = () => {
    const slides = [
        { image: img1, line1: 'PHINMA', line2: 'UPANG', line3: 'DAGUPAN' },
        { image: img2, line1: 'PHINMA', line2: 'UPANG', line3: 'DAGUPAN' },
        { image: img3, line1: 'PHINMA', line2: 'UPANG', line3: 'DAGUPAN' }
    ];

    return (
        <div className="w-full h-screen">
            <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                loop={true}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-8 text-white">
                                <div className="space-y-2 animate-fadeInLeft">
                                    <h1 className="text-4xl md:text-6xl font-bold text-green-600">{slide.line1}</h1>
                                    <h2 className="text-3xl md:text-5xl">{slide.line2}</h2>
                                    <h3 className="text-2xl md:text-4xl">{slide.line3}</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default User_Page_Home;
