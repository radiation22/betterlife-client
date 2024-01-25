import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/blog1.jpg";
import "./counsil.css";
const Counsil = () => {
  return (
    <div className="px-8 counsil-bg py-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <h1 className="text-2xl md:text-4xl">কাউন্সেলিং এবং চিকিংসা সেবা</h1>
          <h1 className="text-xl md:text-2xl">আপনি কি ধরনের সেবা খুঁজছেন?</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 md:px-16">
          <Link to="/individual">
            {" "}
            <div className="bg-[#2AB67D] text-white rounded-lg h-[160px] md:h-[200px]">
              <img
                className="md:h-[150px] rounded-t-lg w-full"
                src={bg1}
                alt=""
              />
              <h1 className="text-center text-xl md:text-2xl mt-3">
                আপনার জন্য
              </h1>
            </div>
          </Link>
          <Link to="/partner">
            <div className="bg-[#E01E5A] text-white rounded-lg h-[160px] md:h-[200px]">
              <img
                className="md:h-[150px] rounded-t-lg w-full"
                src={bg1}
                alt=""
              />
              <h1 className="text-center text-xl  md:text-2xl mt-3">
                আপনার ও পার্টনারের জন্য
              </h1>
            </div>
          </Link>
          <Link to="/baby">
            <div className="bg-[#36C5F0] text-white rounded-lg h-[160px] md:h-[200px]">
              <img
                className="md:h-[150px] rounded-t-lg w-full"
                src={bg1}
                alt=""
              />
              <h1 className="text-center text-xl md:text-2xl mt-3">
                শিশুদের জন্য
              </h1>
            </div>
          </Link>
          <Link to="/others">
            <div className="bg-[#ECB22E] text-white rounded-lg h-[160px] md:h-[200px]">
              <img
                className="md:h-[150px] rounded-t-lg w-full"
                src={bg1}
                alt=""
              />
              <h1 className="text-center text-xl md:text-2xl mt-3">অন্যান্য</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Counsil;
