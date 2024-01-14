import React from "react";
import "./UpCome.css"; // Create a CSS file for styling

const UpCome = () => {
  return (
    <div>
      <div className="flex items-center h-[50px]">
        <div className="bg-[#fcfcfcf3] h-full py-2 md:py-[14px] px-3  w-[20%] md:w-[20%]">
          <p className="text-sm lg:text-2xl w-full text-[#42f583]">
            আপকামিং ফিচার:
          </p>
        </div>
        <div className="w-[80%] md:w-[80%] h-full py-4 m-0 bg-[#9EDD2A]">
          <div className="upcome-container w-full">
            <h1 className="upcome-heading text-white text-lg ">
              ১। ই-ওয়ালেট সংযোজন করা হবে{" "}
              <span className="ps-2">
                ২। হ্যান্ড ক্যাশের পরিবর্তে ই-কয়েন এর মাধ্যমে টিকিট কাটা ।
              </span>{" "}
              <span className="ps-2">
                ৩। নতুন গিফট আইটেম এর সংযোজন করা হবে ।
              </span>
              <span className="ps-2">
                ৪। প্রিয়জনকে টিকিট গিফট করতে পারবেন ।
              </span>
              <span className="ps-2">৫। আপনার প্রয়োজনে ফ্রী কল সুযোগ ।</span>
              <span className="ps-2">৬। নতুন কমিউনিটি তৈরি করার সুযোগ ।</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpCome;
