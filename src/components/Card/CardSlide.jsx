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
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        className="mySwiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide className="">
            <div style={{}} className="p-5 border  rounded shadow">
              <img
                className="h-[220px] md:h-[300px] w-full"
                src={blog.imageUrl}
                alt=""
              />
              <div className="flex justify-between">
                <p className="text-gray-400 py-2">{blog.date}</p>
                <p className="text-gray-400 py-2 uppercase">{blog.category}</p>
              </div>
              <h1 className="text-3xl ">{blog.title}</h1>
              <p>{blog.description.slice(0, 100)}</p>
              <Link to="/blog">
                {" "}
                <button className="bg-[#1793CE] text-white px-4 my-5 py-1 rounded-lg">
                  Read More
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
