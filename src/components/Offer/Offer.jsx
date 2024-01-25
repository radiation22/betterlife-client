import React from "react";
import "./offer.css";

const Offer = () => {
  return (
    <div className="py-5 md:py-16 offer-bg">
      <div className="px-16 py-10 space-y-3 text-white">
        <h1 className="text-2xl md:text-4xl ">মন ও মানসিক স্বাস্থ্য</h1>
        <h1 className="text-2xl md:text-4xl ">পরিষেবা- একটি শান্তির পথে </h1>
        <p className="text-xl md:text-2xl ">
          আপনার আত্নবিশ্বাস এবং সুস্থ মানসিকতার দিকে একটি নতুন দিকে চলুন
        </p>
        <button className="bg-[#3AC6EF] uppercase px-4 py-1 rounded-md">
          What We Offer
        </button>
      </div>
    </div>
  );
};

export default Offer;