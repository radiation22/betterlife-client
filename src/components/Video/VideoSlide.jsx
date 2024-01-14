import React, { useState } from "react";
import "./Video.css"; // Create a CSS file for styling
import thumbnail1 from "../../assets/journey.jpg";
import thumbnail3 from "../../assets/brown.png";
import thumbnail2 from "../../assets/group-bus-travel-myths-debunked.jpg";
import thumbnail4 from "../../assets/buschena.png";
import playBtn from "../../assets/play (2).png";
import icon1 from "../../assets/bus.png";
import icon2 from "../../assets/queue.png";
import icon3 from "../../assets/convenient.png";
import icon4 from "../../assets/gift.png";
import icon5 from "../../assets/lottery.png";
const VideoSlide = () => {
  const [hovered, setHovered] = useState(false);
  const [showVideos, setShowVideos] = useState(Array(14).fill(false));

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePlayClick = (index) => {
    const updatedVideos = [...showVideos];
    updatedVideos[index] = true;
    setShowVideos(updatedVideos);
  };

  const handleCloseVideo = () => {
    setShowVideos(Array(14).fill(false));
  };
  return (
    <div className="lg:px-16 video-section pt-28">
      <div className="">
        <h1 className="text-4xl ps-2 lg:ps-0 text-[#05A541]">সুবিধাসমূহ?</h1>
        <hr className="h-1  lg:ps-0 w-[50%] md:w-[20%] mt-3 bg-[#9EDF24]" />
      </div>
      <div class="slider  ">
        <div class="slide-track">
          {/* 1 */}
          <div
            className={`w-full md:w-[30%]  slide ${hovered ? "paused" : ""}`}
          >
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541]">
                  সিট কেপাসিটি তে <br /> মেট্রো বাস যাতায়াত
                </h1>
                <img className="h-14" src={icon1} alt="" />
              </div>

              <p className=" mt-4 text-[#832c2c]">
                প্রতিদিনের আপনার মেট্রো যাত্রা হোক নিরাপদের সাথে । যাত্রীর ভিড়ে
                দাঁড়িয়ে থাকতে হবে না আর । আপনার গন্তব্যে পোঁছে যান নির্বিঘ্নে
                সাচ্ছন্দে।
              </p>
            </div>
          </div>

          {/* 2 */}
          <div
            className={`w-full md:w-[30%]  slide ${hovered ? "paused" : ""}`}
          >
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541]">
                  কাউন্টার এ লাইন
                  <br />
                  ধরার HASSLE নেই
                </h1>
                <img className="h-14" src={icon2} alt="" />
              </div>

              <p className=" mt-4 text-[#2a87a3]">
                আপনার টিকিট আপনি কাটুন । যেকোনো প্রান্ত থেকে,যেকোনো সময় । নেই
                কোনো ঝামেলা । বাস আসলেই উঠে পড়ুন আপনার গন্তব্যের উদ্দ্যেশে।
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className={`w-full md:w-[30%] slide ${hovered ? "paused" : ""}`}>
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541] ">
                  পরিচ্ছন্ন সিট
                  <br /> আরামদায়ক পরিবেশ
                </h1>
                <img className="h-12" src={icon3} alt="" />
              </div>

              <p className=" mt-4 text-[#FF646F]">
                আপনার যাত্রার উত্তম পরিবেশ । নেই ভীড়ের মাঝে দাঁড়িয়ে থেকে ক্লান্ত
                হওয়ার উপায়। প্রতিদিন পরিষ্কার পরিচ্ছন্ন সিটে বসে আপনার যাত্রা
                হোক আরো আনন্দময় ও সতেজ।
              </p>
            </div>
          </div>
          {/* 4 */}
          <div
            className={`w-full md:w-[30%]  slide ${hovered ? "paused" : ""}`}
          >
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541] ">
                  ৫ APP টিকিটে
                  <br /> প্রতিদিন পুরষ্কার
                </h1>
                <img className="h-14" src={icon4} alt="" />
              </div>

              <p className="mt-4 text-[#CD114B]">
                আপনার ভ্রমণের সাথে হোক পুরষ্কার জিতার আনন্দ । টিকিট কেটেই পয়েন্ট
                অর্জন করে আপনার রিওয়ার্ডস সংগ্রহ করুন , গিফট জিতুন।
              </p>
            </div>
          </div>
          {/* 5 */}
          <div
            className={`w-full md:w-[30%]  slide ${hovered ? "paused" : ""}`}
          >
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541] ">
                  প্রতিমাসে রেফেল
                  <br /> DRAW GIFT
                </h1>
                <img className="h-14" src={icon5} alt="" />
              </div>

              <p className="mt-4 text-[#8f7328]">
                সর্বোচ্চ টিকিট কেটে যাতায়াত করুন। আর প্রতি মাসে সর্বোচ্চ টিকিট
                কেটে যাতায়াতকারী ব্যক্তির মধ্য থেকে আপনি ও হতে পারেন আমাদের
                বিজয়ী যাত্রী ।
              </p>
            </div>
          </div>
          {/* 6 */}
          <div className={`w-full md:w-[30%] slide ${hovered ? "paused" : ""}`}>
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541]">
                  সিট কেপাসিটি তে <br /> মেট্রো বাস যাতায়াত
                </h1>
                <img className="h-14" src={icon1} alt="" />
              </div>

              <p className=" mt-4 text-[#832c2c]">
                প্রতিদিনের আপনার মেট্রো যাত্রা হোক নিরাপদের সাথে । যাত্রীর ভিড়ে
                দাঁড়িয়ে থাকতে হবে না আর । আপনার গন্তব্যে পোঁছে যান নির্বিঘ্নে
                সাচ্ছন্দে।
              </p>
            </div>
          </div>
          {/* 7 */}
          <div
            className={`w-full md:w-[30%]  slide ${hovered ? "paused" : ""}`}
          >
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541]">
                  কাউন্টার এ লাইন
                  <br />
                  ধরার HASSLE নেই
                </h1>
                <img className="h-14" src={icon2} alt="" />
              </div>

              <p className=" mt-4 text-[#2a87a3]">
                আপনার টিকিট আপনি কাটুন । যেকোনো প্রান্ত থেকে,যেকোনো সময় । নেই
                কোনো ঝামেলা । বাস আসলেই উঠে পড়ুন আপনার গন্তব্যের উদ্দ্যেশে।
              </p>
            </div>
          </div>
          {/* 8 */}
          <div
            className={`w-full md:w-[30%]  slide ${hovered ? "paused" : ""}`}
          >
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541] ">
                  পরিচ্ছন্ন সিট
                  <br /> আরামদায়ক পরিবেশ
                </h1>
                <img className="h-12" src={icon3} alt="" />
              </div>

              <p className=" mt-4 text-[#FF646F]">
                আপনার যাত্রার উত্তম পরিবেশ । নেই ভীড়ের মাঝে দাঁড়িয়ে থেকে ক্লান্ত
                হওয়ার উপায়। প্রতিদিন পরিষ্কার পরিচ্ছন্ন সিটে বসে আপনার যাত্রা
                হোক আরো আনন্দময় ও সতেজ।
              </p>
            </div>
          </div>
          {/* 9 */}
          <div className={`w-full md:w-[30%] slide ${hovered ? "paused" : ""}`}>
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541] ">
                  ৫ APP টিকিটে
                  <br /> প্রতিদিন পুরষ্কার
                </h1>
                <img className="h-14" src={icon4} alt="" />
              </div>

              <p className="mt-4 text-[#CD114B]">
                আপনার ভ্রমণের সাথে হোক পুরষ্কার জিতার আনন্দ । টিকিট কেটেই পয়েন্ট
                অর্জন করে আপনার রিওয়ার্ডস সংগ্রহ করুন , গিফট জিতুন।
              </p>
            </div>
          </div>
          {/* 10 */}
          <div
            className={`w-full md:w-[30%]  slide ${hovered ? "paused" : ""}`}
          >
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541] ">
                  প্রতিমাসে রেফেল
                  <br /> DRAW GIFT
                </h1>
                <img className="h-14" src={icon5} alt="" />
              </div>

              <p className="mt-4 text-[#8f7328]">
                সর্বোচ্চ টিকিট কেটে যাতায়াত করুন। আর প্রতি মাসে সর্বোচ্চ টিকিট
                কেটে যাতায়াতকারী ব্যক্তির মধ্য থেকে আপনি ও হতে পারেন আমাদের
                বিজয়ী যাত্রী ।
              </p>
            </div>
          </div>
          {/* 11 */}
          <div
            className={`w-full md:w-[30%]  slide ${hovered ? "paused" : ""}`}
          >
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541]">
                  সিট কেপাসিটি তে <br /> মেট্রো বাস যাতায়াত
                </h1>
                <img className="h-14" src={icon1} alt="" />
              </div>

              <p className=" mt-4 text-[#832c2c]">
                প্রতিদিনের আপনার মেট্রো যাত্রা হোক নিরাপদের সাথে । যাত্রীর ভিড়ে
                দাঁড়িয়ে থাকতে হবে না আর । আপনার গন্তব্যে পোঁছে যান নির্বিঘ্নে
                সাচ্ছন্দে।
              </p>
            </div>
          </div>
          {/* 12 */}
          <div className={`w-full md:w-[30%] slide ${hovered ? "paused" : ""}`}>
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541]">
                  কাউন্টার এ লাইন
                  <br />
                  ধরার HASSLE নেই
                </h1>
                <img className="h-14" src={icon2} alt="" />
              </div>

              <p className=" mt-4 text-[#2a87a3]">
                আপনার টিকিট আপনি কাটুন । যেকোনো প্রান্ত থেকে,যেকোনো সময় । নেই
                কোনো ঝামেলা । বাস আসলেই উঠে পড়ুন আপনার গন্তব্যের উদ্দ্যেশে।
              </p>
            </div>
          </div>
          {/* 13 */}
          <div
            className={`w-full md:w-[30%]  slide ${hovered ? "paused" : ""}`}
          >
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541] ">
                  পরিচ্ছন্ন সিট
                  <br /> আরামদায়ক পরিবেশ
                </h1>
                <img className="h-12" src={icon3} alt="" />
              </div>

              <p className=" mt-4 text-[#FF646F]">
                আপনার যাত্রার উত্তম পরিবেশ । নেই ভীড়ের মাঝে দাঁড়িয়ে থেকে ক্লান্ত
                হওয়ার উপায়। প্রতিদিন পরিষ্কার পরিচ্ছন্ন সিটে বসে আপনার যাত্রা
                হোক আরো আনন্দময় ও সতেজ।
              </p>
            </div>
          </div>
          {/* 14 */}
          <div
            className={`w-full md:w-[30%]  slide ${hovered ? "paused" : ""}`}
          >
            <div className="py-10 h-[280px] px-14 border bg-white card rounded-3xl">
              <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl text-[#05A541] ">
                  ৫ APP টিকিটে
                  <br /> প্রতিদিন পুরষ্কার
                </h1>
                <img className="h-14" src={icon4} alt="" />
              </div>

              <p className="mt-4 text-[#CD114B]">
                আপনার ভ্রমণের সাথে হোক পুরষ্কার জিতার আনন্দ । টিকিট কেটেই পয়েন্ট
                অর্জন করে আপনার রিওয়ার্ডস সংগ্রহ করুন , গিফট জিতুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSlide;
