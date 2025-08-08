import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid, Navigation, Autoplay } from "swiper/modules";

const skills = [
  "#JavaScript", "#Next.js","#AWS","#Jenkins","#Ansible","#Grafana", "#Docker","#Kubernetes", "#React", "#Tailwind", "#MongoDB",
  "#Mongoose", "#Redux", "#HTML", "#CSS",
  "#Git", "#GitHub"
];

export default function SkillsSlider() {
  return (
    <div className="max-w-80  mx-auto">
      <Swiper
        modules={[Grid,Navigation, Autoplay]}
        spaceBetween={2}
        slidesPerView={3} // 3 columns
        grid={{
          rows: 3,
          fill: "row",
        }}
           navigation={{
          nextEl: '.custom-next',
        }}
        loop={true}
        autoplay={{
          delay: 1500, // time in ms before sliding
          disableOnInteraction: false, // keeps scrolling after user interacts
        }}
        className="mySwiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <span className="inline-block border border-white text-amber-100 px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
              {skill}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
}
