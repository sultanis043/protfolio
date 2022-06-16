import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex harum fuga quia aperiam rem! Ducimus impedit voluptas fuga blanditiis ex consectetur aspernatur alias suscipit in",
    },
    {
      img: profilePic2,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex harum fuga quia aperiam rem! Ducimus impedit voluptas fuga blanditiis ex consectetur aspernatur alias suscipit in",
    },
    {
      img: profilePic3,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex harum fuga quia aperiam rem! Ducimus impedit voluptas fuga blanditiis ex consectetur aspernatur alias suscipit in",
    },
    {
      img: profilePic4,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex harum fuga quia aperiam rem! Ducimus impedit voluptas fuga blanditiis ex consectetur aspernatur alias suscipit in",
    },
  ]
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clinets always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div className="t-blur1 blur" style={{ background: "var(--purple)" }}></div>
        <div className="t-blur2 blur" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide
            >
              <div className="testimonial">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;