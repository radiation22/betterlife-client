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
          <div className="py-10 text-center bg-[#49164B] rounded-2xl md:mx-16">
            <div className="flex flex-col justify-center items-center py-4 gap-3">
              <img className="h-14 rounded-full" src={user} alt="" />
              <div className="text-white">
                <p className="font-bold text-[#E31F5B]">Jhon Smith</p>
              </div>
            </div>
            <h1 className="text-white">
              সুসান তার অন্তর্দৃষ্টি এবং কথোপকথন পদ্ধতিতে আশ্চর্যজনক। আমি তাকে{" "}
              <br />
              খুঁজে পেয়ে এবং তার দিকনির্দেশনা দিয়ে নিরাময় শুরু করতে পেরে খুব
              আনন্দিত এবং ধন্য।""
            </h1>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center py-10 bg-[#49164B] rounded-2xl md:mx-16">
            <div className="flex flex-col justify-center items-center py-4 gap-3">
              <img className="h-14 rounded-full" src={user} alt="" />
              <div>
                <p className="font-bold text-[#E31F5B]">Jhon Smith</p>
              </div>
            </div>
            <h1 className="text-white">
              সুসান তার অন্তর্দৃষ্টি এবং কথোপকথন পদ্ধতিতে আশ্চর্যজনক। আমি তাকে{" "}
              <br />
              খুঁজে পেয়ে এবং তার দিকনির্দেশনা দিয়ে নিরাময় শুরু করতে পেরে খুব
              আনন্দিত এবং ধন্য।""
            </h1>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center py-10 bg-[#49164B] rounded-2xl md:mx-16">
            <div className="flex flex-col justify-center items-center py-4 gap-3">
              <img className="h-14 rounded-full" src={user} alt="" />
              <div>
                <p className="font-bold text-[#E31F5B]">Jhon Smith</p>
              </div>
            </div>
            <h1 className="text-white">
              সুসান তার অন্তর্দৃষ্টি এবং কথোপকথন পদ্ধতিতে আশ্চর্যজনক। আমি তাকে{" "}
              <br />
              খুঁজে পেয়ে এবং তার দিকনির্দেশনা দিয়ে নিরাময় শুরু করতে পেরে খুব
              আনন্দিত এবং ধন্য।""
            </h1>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
