import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';

import './Category.css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='mb-20'>
            <SectionTitle subHeading={'From 10am To 10pm'} Heading={'Order Online'}/>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide className='relative'>
                    <img src={img2} alt="" />
                    <div>
                        <h1 className='text-4xl text-center text-white drop-shadow-[rgba(0,0,0,0.2)] -mt-16'>SALAD</h1>
                    </div>
                    {/* <h3 className='absolute bottom-0 text-center uppercase text-3xl text-white'>Salad</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <div>
                        <h1 className='text-4xl text-center text-white drop-shadow-[rgba(0,0,0,0.2)] -mt-16'>SALAD</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <div>
                        <h1 className='text-4xl text-center text-white drop-shadow-[rgba(0,0,0,0.2)] -mt-16'>SALAD</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <div>
                        <h1 className='text-4xl text-center text-white drop-shadow-[rgba(0,0,0,0.2)] -mt-16'>SALAD</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <div>
                        <h1 className='text-4xl text-center text-white drop-shadow-[rgba(0,0,0,0.2)] -mt-16'>SALAD</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <div>
                        <h1 className='text-4xl text-center text-white drop-shadow-[rgba(0,0,0,0.2)] -mt-16'>SALAD</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <div>
                        <h1 className='text-4xl text-center text-white drop-shadow-[rgba(0,0,0,0.2)] -mt-16'>SALAD</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;