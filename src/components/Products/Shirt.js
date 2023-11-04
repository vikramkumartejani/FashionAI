import React from 'react'
import './products.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import product from '../../assets/Blue_Tshirt.jpg'


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
        <>
            <div className='product-container'>
                <div>
                    {/* slider */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', width: '100%' }}>

                        {/* prevButton */}
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
                            {/* map slider */}
                            {/* <div> */}
                            {shirt.map((item, index) => (
                                <SwiperSlide key={item.id} className='box'>
                                    <img src={item.img} alt={item.title} />
                                    <h3 style={{ fontSize: '1rem', fontWeight: '500' }}>
                                        {item.title}
                                    </h3>
                                </SwiperSlide>
                            ))}
                            {/* </div> */}
                        </Swiper>
                        {/* nextButton */}
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

export default Shirt