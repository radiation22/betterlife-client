import React from "react";
import giftimg from "../../assets/give-gift.png";
const Gift = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-20">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl">একটি বেটারহেল্প সদস্যতা উপহার দিন</h1>
        <p className="text-lg">
          থেরাপি হল সবচেয়ে অর্থপূর্ণ উপহারগুলির মধ্যে একটি যা আপনি আপনার বন্ধু
          এবং প্রিয়জনকে দিতে পারেন।
        </p>
        <button class="bg-amber-600 text-white rounded-lg px-4 py-2 mt-5">
          একটি সদস্যপদ উপহার
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src={giftimg} alt="" />
      </div>
    </div>
  );
};

export default Gift;
