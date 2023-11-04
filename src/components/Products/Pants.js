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
                            {pants.map((item, index) => (
                                <SwiperSlide key={item.id} className='box'>
                                    <img src={item.pantsimg} alt={item.title} />
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

export default Pants