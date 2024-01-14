import React from "react";
import Card from "../Card/Card";
import bg from "../../assets/ilst1.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row py-10 md:px-5">
      <div className="w-full md:w-1/2">
        <Card></Card>
      </div>
      <div className="w-full md:w-1/2 p-5">
        <h1 className="text-3xl text-center">কাউন্সেলিং এবং চিকিংসা সেবা</h1>
        <h1 className="text-xl text-center">আপনি কি ধরনের সেবা খুঁজছেন?</h1>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-[#66B845] text-white rounded-lg flex justify-center items-center h-[200px]">
            <Link to="/individual">আপনার জন্য</Link>
          </div>
          <div className="bg-[#66B845] text-white rounded-lg flex justify-center items-center h-[200px]">
            <Link to="/partner">
              আপনার ও <br /> পার্টনারের জন্য
            </Link>
          </div>
          <div className="bg-[#66B845] text-white rounded-lg flex justify-center items-center h-[200px]">
            <Link to="/baby">শিশুদের জন্য</Link>
          </div>
          <div className="bg-[#66B845] text-white rounded-lg flex justify-center items-center h-[200px]">
            <Link to="/others">অন্যান্য</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
