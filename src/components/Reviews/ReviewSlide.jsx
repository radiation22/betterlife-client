import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import user from "../../assets/convenient.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./review.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function ReviewSlide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="py-10 text-center">
            <h1 className="">
              সুসান তার অন্তর্দৃষ্টি এবং কথোপকথন পদ্ধতিতে আশ্চর্যজনক। আমি তাকে
              খুঁজে পেয়ে এবং তার দিকনির্দেশনা দিয়ে নিরাময় শুরু করতে পেরে খুব
              আনন্দিত এবং ধন্য।""
            </h1>
            <div className="flex justify-center items-center py-4 gap-3">
              <img className="h-10 rounded-full" src={user} alt="" />
              <div>
                <p className="font-bold">Jhon Smith</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center py-10">
            <h1>
              সুসান তার অন্তর্দৃষ্টি এবং কথোপকথন পদ্ধতিতে আশ্চর্যজনক। আমি তাকে
              খুঁজে পেয়ে এবং তার দিকনির্দেশনা দিয়ে নিরাময় শুরু করতে পেরে খুব
              আনন্দিত এবং ধন্য।""
            </h1>
            <div className="flex justify-center items-center py-4 gap-3">
              <img className="h-10 rounded-full" src={user} alt="" />
              <div>
                <p className="font-bold">Jhon Smith</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center py-10">
            <h1>
              সুসান তার অন্তর্দৃষ্টি এবং কথোপকথন পদ্ধতিতে আশ্চর্যজনক। আমি তাকে
              খুঁজে পেয়ে এবং তার দিকনির্দেশনা দিয়ে নিরাময় শুরু করতে পেরে খুব
              আনন্দিত এবং ধন্য।""
            </h1>
            <div className="flex justify-center items-center py-4 gap-3">
              <img className="h-10 rounded-full" src={user} alt="" />
              <div>
                <p className="font-bold">Jhon Smith</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
