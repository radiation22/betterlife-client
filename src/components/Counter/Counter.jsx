import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import avt1 from "../../assets/avatar1.png";
import avt2 from "../../assets/avatar2.png";
import countapi from "countapi-js";
import "./counter.css";
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
    <div className="flex count-bg items-center justify-end gap-10 md:px-16 pt-10">
      <div className="">
        <div className=" w-[180px] mx-auto rounded-2xl flex flex-col items-center justify-center">
          <CountUp
            className="text-5xl text-[#49164B] font-bold"
            end={visits}
            duration={5}
          />
        </div>
        <h1 className="text-center text-2xl mt-3">আমাদের নিয়মিত পাঠক</h1>
      </div>
      <div className="">
        <div className=" w-[180px] mx-auto rounded-2xl flex-col flex items-center justify-center">
          <CountUp
            className="text-5xl text-[#49164B] font-bold"
            end={500}
            duration={5}
          />
        </div>
        <h1 className="text-center text-2xl mt-3 ">
          আমাদের রেজিস্ট্রেশনকৃত সদস্য সংখ্যা
        </h1>
      </div>
    </div>
  );
};

export default Counter;
