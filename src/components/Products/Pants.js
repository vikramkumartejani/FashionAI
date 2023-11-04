import React from 'react'
import './products.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import pant from '../../assets/pants.png'

const Pants = () => {

    const pants = [
        {
            id: 1,
            pantsimg: pant,
            title: "Product Card1",
        },
        {
            id: 2,
            pantsimg: pant,
            title: "Product Card2",
        },
        {
            id: 3,
            pantsimg: pant,
            title: "Product Card3",
        },
        {
            id: 4,
            pantsimg: pant,
            title: "Product Card4",
        },
        {
            id: 5,
            pantsimg: pant,
            title: "Product Card5",
        },
        {
            id: 6,
            pantsimg: pant,
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
            <h1>Pants</h1>

            <div className='product-slider' >
                <div
                    onClick={goPrev}
                    className='slider-btn slider-prev-btn'
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
                    {pants.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='box'>
                                <div className='product-img'>
                                    <img src={item.pantsimg} alt={item.title} />
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

export default Pants