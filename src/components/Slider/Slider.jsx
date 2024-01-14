import React, { useRef, useState } from "react";
import img1 from "../../assets/Asset 2.png";
import img2 from "../../assets/Asset 4.png";
import img3 from "../../assets/Asset 5.png";
import img4 from "../../assets/Asset 6.png";
import img5 from "../../assets/Asset 7.png";
import img6 from "../../assets/Asset 8.png";
import img10 from "../../assets/Asset 10.png";
import img9 from "../../assets/Asset 9.png";
import "./slider.css";

export default function App() {
  return (
    <>
      <div id="exhibition" className="lg:px-20">
        <div className="text-center">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCd9DV5yGLSzpuU2G58FXLQw"
          >
            <button className="bg-[#9EDD2A] text-white mt-20 px-6 py-2 rounded-full">
              সব ভিডিও
            </button>
          </a>
        </div>
        <h1 className="text-4xl px-5 lg:px-0 md:text-5xl mt-20  text-[#05A541]">
          সম্পূর্ণ গ্যালারী
        </h1>
        <hr className="h-1 ms-5 md:ms-0 w-[50%] md:w-[30%] mt-3 bg-[#9EDF24]" />
      </div>

      <div className="lg:px-16 pt-10 mt-10">
        <div class="sliderv">
          <div class="slidev-track">
            <div class="slidev">
              <img className="h-full" src={img10} width="250" alt="" />
            </div>
            <div class="slidev">
              <img className="h-full" src={img2} width="250" alt="" />
            </div>
            <div class="slidev">
              <img className="h-full" src={img9} width="250" alt="" />
            </div>
            <div class="slidev">
              <img className="h-full" src={img1} width="250" alt="" />
            </div>

            <div class="slidev">
              <img className="h-full" src={img6} width="250" alt="" />
            </div>
            <div class="slidev">
              <img className="h-full" src={img5} width="250" alt="" />
            </div>
            <div class="slidev">
              <img className="h-full" src={img3} width="250" alt="" />
            </div>
            <div class="slidev">
              <img className="h-full" src={img4} width="250" alt="" />
            </div>

            <div class="slidev">
              <img className="h-full" src={img10} width="250" alt="" />
            </div>
            <div class="slidev">
              <img className="h-full" src={img2} width="250" alt="" />
            </div>
            <div class="slidev">
              <img className="h-full" src={img9} width="250" alt="" />
            </div>
            <div class="slidev">
              <img className="h-full" src={img1} width="250" alt="" />
            </div>
            <div class="slidev">
              <img className="h-full" src={img1} width="250" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
