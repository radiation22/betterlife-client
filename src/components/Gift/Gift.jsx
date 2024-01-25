import React from "react";
import giftimg from "../../assets/gift (2).png";
const Gift = () => {
  return (
    <div className="flex my-5 flex-col md:flex-row justify-center items-center px-4 md:px-20">
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-2xl md:text-4xl text-[#E0205C]">
          একটি বেটারহেল্প সদস্যতা উপহার দিন
        </h1>
        <p className="md:text-lg text-black">
          থেরাপি হল সবচেয়ে অর্থপূর্ণ উপহারগুলির মধ্যে একটি যা আপনি আপনার বন্ধু
          এবং প্রিয়জনকে দিতে পারেন।
        </p>
        <button class="bg-[#3AC6EF] text-white rounded-lg px-4 py-2 mt-5">
          একটি সদস্যপদ উপহার
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-3 md:px-10">
        <img src={giftimg} alt="" />
      </div>
    </div>
  );
};

export default Gift;
