import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import avt1 from "../../assets/avatar1.png";
import avt2 from "../../assets/avatar2.png";
import countapi from "countapi-js";
const Counter = () => {
  const [visits, setVisits] = useState(0);

  // Loading from the server
  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch(
          "https://betterlife-server.vercel.app/api/visits"
        );
        const data = await response.json();
        setVisits(data.count);
      } catch (error) {
        console.error("Error fetching visit count:", error);
      }
    };

    fetchVisits();
  }, []);

  // Saving to the server
  useEffect(() => {
    const incrementVisit = async () => {
      try {
        await fetch(
          "https://betterlife-server.vercel.app/api/visits/increment",
          {
            method: "POST",
          }
        );
      } catch (error) {
        console.error("Error incrementing visit count:", error);
      }
    };

    incrementVisit();
  }, []);
  return (
    <div className="grid grid-cols-2 gap-10 py-10">
      <div className="">
        <div className="bg-[#66B845] h-[180px] w-[180px] mx-auto rounded-2xl flex flex-col items-center justify-center">
          <img src={avt1} alt="" />
          <CountUp className="text-white text-4xl" end={visits} duration={5} />
        </div>
        <h1 className="text-center text-2xl mt-3">আমাদের নিয়মিত পাঠক</h1>
      </div>
      <div className="">
        <div className="bg-[#66B845] h-[180px] w-[180px] mx-auto rounded-2xl flex-col flex items-center justify-center">
          <img src={avt1} alt="" />
          <CountUp className="text-white text-4xl" end={400} duration={5} />
        </div>
        <h1 className="text-center text-2xl mt-3 ">
          আমাদের রেজিস্ট্রেশনকৃত সদস্য সংখ্যা
        </h1>
      </div>
    </div>
  );
};

export default Counter;
