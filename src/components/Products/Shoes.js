import React from 'react'
import './products.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import shoe from '../../assets/shoes.png'

const Shoes = () => {

    const shoes = [
        {
            id: 1,
            shoesimg: shoe,
            title: "Product Card1",
        },
        {
            id: 2,
            shoesimg: shoe,
            title: "Product Card2",
        },
        {
            id: 3,
            shoesimg: shoe,
            title: "Product Card3",
        },
        {
            id: 4,
            shoesimg: shoe,
            title: "Product Card4",
        },
        {
            id: 5,
            shoesimg: shoe,
            title: "Product Card5",
        },
        {
            id: 6,
            shoesimg: shoe,
            title: "Product Card6",
        },

    ];




    const goPrev = () => {
        if (swiper) swiper.slidePrev();
    };

    const goNext = () => {
        if (swiper) swiper.slideNext();
    };
    let swiper = null;

    const breakpoints = {
        0: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    };
    return (
        <>
            <div className='product-container'>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', width: '100%' }}>
                        <div
                            onClick={goPrev}
                            style={{ width: '1.75rem', height: '1.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0.25rem', cursor: 'pointer' }}
                        >
                            <MdKeyboardArrowLeft style={{ fontSize: '1.25rem' }} />
                        </div>
                        <Swiper
                            onSwiper={(swiperInstance) => (swiper = swiperInstance)}
                            centeredSlides={false}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            breakpoints={breakpoints}
                            spaceBetween={10}
                            slidesPerView={3}
                        >
                            {shoes.map((item, index) => (
                                <SwiperSlide key={item.id} className='box'>
                                    <img src={item.shoesimg} alt={item.title} />
                                    <h3 style={{ fontSize: '1rem', fontWeight: '500' }}>
                                        {item.title}
                                    </h3>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div
                            onClick={goNext}
                            style={{ width: '1.75rem', height: '1.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0.25rem', cursor: 'pointer' }}
                        >
                            <MdKeyboardArrowRight style={{ fontSize: '1.25rem' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shoes