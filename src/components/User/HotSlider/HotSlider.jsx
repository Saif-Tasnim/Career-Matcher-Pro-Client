// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/Common/location.png';
import img2 from '../../../assets/Common/taka.png';

const HotSlider = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    arr.map(a =>
                        <SwiperSlide key={a} className='border-2 border-red-400 p-4 rounded-lg'>
                            <h1 className='font-bold my-2'> Python Developer </h1>
                            <h3 className='mb-4'> Amazon Ltd. </h3>
                            <hr />

                            <p className='my-3 flex gap-3'> <img src={img1} className='w-6' alt="" /> <span>Work From Home </span> </p>
                            
                            <p className='my-3 flex gap-3'> <img src={img2} className='w-5' alt="" /> <span>25,000 - 35,000 /monthly</span> </p>

                            <button className='my-6 text-blue-700 font-bold hover:text-blue-500'> View Details </button>


                        </SwiperSlide>
                    )
                }

            </Swiper>
        </>
    );
}

export default HotSlider;
