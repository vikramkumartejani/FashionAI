import React from 'react'
import './products.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import product from '../../assets/shirt.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Shirt = () => {

    const shirt = [
        {
            id: 1,
            img: product,
            title: "Product Card1",
        },
        {
            id: 2,
            img: product,
            title: "Product Card2",
        },
        {
            id: 3,
            img: product,
            title: "Product Card3",
        },
        {
            id: 4,
            img: product,
            title: "Product Card4",
        },
        {
            id: 5,
            img: product,
            title: "Product Card5",
        },
        {
            id: 6,
            img: product,
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

        <div className='product-container'>
            <h1>Shirts</h1>

            <div className='product-slider'>
                <div
                    className='slider-btn slider-prev-btn'
                    onClick={goPrev}
                >
                    <MdKeyboardArrowLeft className='icon-btn' />
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
                    {shirt.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='box'>
                                <div className='product-img'>
                                <img src={item.img} alt={item.title} />
                                </div>
                                <div className='product-detail'>
                                    <h3>
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    onClick={goNext}
                    className='slider-btn slider-next-btn'
                >
                    <MdKeyboardArrowRight className='icon-btn' />
                </div>
            </div>

        </div>

    )
}

export default Shirt