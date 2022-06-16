import React from 'react'
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Hoc from "../../img/hoc.png";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css';


const Portfolio = () => {
    return (
        <div className="portfolio">
            {/* heading */}
            <span>Reccent projects </span>
            <span>Portfolio</span>
            {/* slider */}
            <Swiper
            // spaceBetween={30}
            // slidePrevClass={3}
            // grabCursor={true}
            // className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>

    );
}

export default Portfolio;