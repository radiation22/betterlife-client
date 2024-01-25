import React from "react";
import ReviewSlide from "./ReviewSlide";

const Reviews = () => {
  return (
    <div className="px-3 md:px-28 py-20">
      <h1 className="text-center text-4xl font-bold text-[#EAAF1F]">
        What our Client Say
      </h1>
      <div className="py-10">
        <ReviewSlide></ReviewSlide>
      </div>
    </div>
  );
};

export default Reviews;
