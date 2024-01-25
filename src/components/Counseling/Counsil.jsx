import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/p1.jpg";
import bg2 from "../../assets/p2.jpg";
import bg3 from "../../assets/p3.png";
import bg4 from "../../assets/p4.png";
import callbg from "../../assets/call (2).png";
import "./counsil.css";
const Counsil = () => {
  return (
    <div className="px-8 counsil-bg py-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-5xl text-[#E01E5A]">
            একা ও অবসাদগ্রস্থ হবেন না !
          </h1>
          <h1 className="text-xl md:text-3xl text-[#36C5F0]">
            আপনার পাশে আমরা আছি
          </h1>
          <h1 className="text-xl md:text-3xl">ফ্রী কল সেশান Serial বুক করুন</h1>
          <Link to="/callPage">
            <button className="px-4 py-1 mt-5 rounded-md text-white bg-[#36C5F0]">
              কল সেশান বুক করুন
            </button>
          </Link>
          <img className="h-[400px] w-[90%]" src={callbg} alt="" />
        </div>
        <div>
          <div className="py-4">
            <h1 className="text-2xl text-right md:text-5xl text-[#E01E5A]">
              কাউন্সেলিং এবং চিকিংসা সেবা
            </h1>
            <h1 className="text-xl text-right md:text-3xl text-black">
              আপনার কোন সেবাটি প্রয়োজন?
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 md:px-5">
            <Link to="/individual">
              {" "}
              <div className="bg-[#2AB67D] text-white rounded-lg h-[160px] md:h-[240px]">
                <img
                  className="md:h-[150px] rounded-t-lg w-full"
                  src={bg1}
                  alt=""
                />
                <h1 className="text-center text-lg md:text-xl px-1 mt-3">
                  আমার নিজের ব্যাক্তিগত বিষয়ে
                </h1>
              </div>
            </Link>
            <Link to="/partner">
              <div className="bg-[#E01E5A] text-white rounded-lg h-[160px] md:h-[240px]">
                <img
                  className="md:h-[150px] rounded-t-lg w-full"
                  src={bg2}
                  alt=""
                />
                <h1 className="text-center text-lg  md:text-xl px-1 mt-3">
                  আপনার বৈবাহিক / দাম্পত্য / কাপল পার্টারের জন্য
                </h1>
              </div>
            </Link>
            <Link to="/baby">
              <div className="bg-[#36C5F0] text-white rounded-lg h-[160px] md:h-[240px]">
                <img
                  className="md:h-[150px] rounded-t-lg w-full"
                  src={bg3}
                  alt=""
                />
                <h1 className="text-center text-xl md:text-2xl mt-3 px-1">
                  আপনার সন্তানের বা শিশুদের জন্য
                </h1>
              </div>
            </Link>
            <Link to="/others">
              <div className="bg-[#ECB22E] text-white rounded-lg h-[160px] md:h-[240px]">
                <img
                  className="md:h-[150px] rounded-t-lg w-full"
                  src={bg4}
                  alt=""
                />
                <h1 className="text-center text-xl md:text-2xl mt-3 px-1">
                  পিতা-মাতা বা বয়স্ক অন্যান্যদের জন্য
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counsil;
