import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./card.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "./styles.css";
import "swiper/css/navigation";

// import required modules
import blogpic from "../../assets/blog1.jpg";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function CardSlide() {
  const queryKey = ["blogs"];

  const { data: blogs = [], refetch } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const url = "https://betterlife-server.vercel.app/blogs";
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
      <Swiper
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 1, spaceBetween: 30 },
          1024: { slidesPerView: 1, spaceBetween: 30 },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        className="mySwiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide className="">
            <div className="md:flex items-center">
              <div className="w-full md:w-1/2 md:ps-10">
                <img
                  className="h-[200px] md:h-[380px] w-full"
                  src={blog.imageUrl}
                  alt=""
                />
              </div>
              <div className="w-full md:w-1/2 bg-[#36C5F0] text-white md:h-[290px] p-6 md:ms-[-90px]">
                <h1 className="text-3xl ">{blog.title}</h1>
                <p>{blog.description.slice(0, 300)}</p>
                <div className="flex justify-between">
                  <p className="text-[#49164B] py-2">{blog.date}</p>
                  <p className="text-[#49164B] py-2 uppercase">
                    {blog.category}
                  </p>
                </div>
                <Link to="/blog">
                  {" "}
                  <button className="bg-[#EBB228] text-white px-4 my-5 py-1 rounded-lg">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
