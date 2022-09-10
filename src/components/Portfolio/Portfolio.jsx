import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Sidebar from '../../img/sidebar.png';
import HOC from '../../img/hoc.png';
import Ecommerce from '../../img/ecommerce.png';
import MusicApp from '../../img/musicapp.png';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';

const Portfolio = () => {
    return (
        <div className='portfolio' id='Portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* Slider Part */}
            <Swiper
                spaceBetween={70}
                slidesPerView={3}
                grabCursor={true}
                modules={[Pagination, Autoplay]}
                pagination={{clickable: 'true'}}
                autoplay={{delay: 2000}}
                className="portfolio-slider"
                style={{position:'relative',left:'0.5rem'}}>
                
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default Portfolio;