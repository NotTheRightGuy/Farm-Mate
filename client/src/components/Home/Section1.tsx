"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Navbar from "../Navbar";
import "./swipercustom.css"
function Section1() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide><img src="https://t4.ftcdn.net/jpg/03/33/59/69/360_F_333596901_9lw7fccFZwM0sPh8ShtztK8X8N1rXpsX.jpg" alt="Slide1" 
        className="w-full h-full object-center object-cover"/></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1618684707276-5b4b7230af8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFncmljdWx0dXJlJTIwZmllbGR8ZW58MHx8MHx8fDA%3D" alt="slide2" 
        className="w-full h-full object-center object-cover" /></SwiperSlide>
        <SwiperSlide> <img src="https://media.istockphoto.com/id/1386558891/photo/female-farmer-spraying-pesticide-in-green-field-during-springtime.jpg?s=612x612&w=0&k=20&c=pQE9wpYNVBQZxhM6UDZa5e5dggwdWzGRIr5tCI0CKNk=" alt="Slide 3" 
        className="w-full h-full object-center object-cover"/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Section1;
