import React, { useState, useEffect } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import { FaQuoteLeft } from "react-icons/fa";
import './Testimonial.css';


const Testimonial = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
            .catch(err => console.log(err.message))
    }, []);

    return (
        <div className='testimonial-section'>
            <SectionTitle subHeading={'What Our Client Say'} Heading={'TESTIMONIALS'} />
            <div className='reviewSection'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        review.map((item, index) =>

                            <SwiperSlide key={index}>
                                <div className='review-inner'>
                                    <div className="rating-section">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={item.rating}
                                            readOnly
                                        />
                                    </div>
                                    <div className='quoteIcon'>
                                        <FaQuoteLeft/>
                                    </div>
                                    <div>
                                        <p className="review-info">{item.details}</p>
                                        <h1 className='review-author'>{item.name}</h1>
                                    </div>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;