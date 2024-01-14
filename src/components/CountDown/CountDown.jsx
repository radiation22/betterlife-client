import React, { useState, useEffect } from "react";
import "./count.css";

const CountDown = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to format numbers in Bengali
  const formatBengaliNumber = (number) => {
    const bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return number.toString().replace(/\d/g, (d) => bengaliNumbers[d]);
  };

  useEffect(() => {
    // Set the end date to October 30, 2023
    const endDate = new Date("2023-12-25T00:00:00Z");

    const timer = setInterval(() => {
      const timeDiff = endDate - new Date();
      if (timeDiff < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="">
      <div>
        <div className="flex gap-10 md:gap-16 ps-4 rainbow">
          <div className="text-center ">
            <div className="flex items-center mb-6 rounded-md justify-center md:w-[100px] md:h-[100px]">
              <p className="text-4xl pt-3 md:pt-0 md:text-8xl text-center font-bold text-black">
                {formatBengaliNumber(remainingTime.days)}
              </p>
            </div>
            <strong className="md:text-xl font-bold">দিন</strong>
          </div>
          <div className="text-center">
            <div className="flex items-center mb-6 rounded-md justify-center md:w-[100px] md:h-[100px]">
              <p className="text-4xl  pt-3 md:pt-0 md:text-8xl text-center font-bold text-black">
                {formatBengaliNumber(remainingTime.hours)}
              </p>
            </div>
            <strong className="md:text-xl font-bold">ঘণ্টা</strong>
          </div>
          <div className="text-center ">
            <div className="flex items-center mb-6 rounded-md justify-center md:w-[100px] md:h-[100px]">
              <p className="text-4xl pt-3 md:pt-0 md:text-8xl text-center font-bold text-black">
                {formatBengaliNumber(remainingTime.minutes)}
              </p>
            </div>
            <strong className="md:text-xl  font-bold">মিনিট</strong>
          </div>
          <div className="text-center ">
            <div className="flex items-center mb-6 rounded-md justify-center md:w-[100px] md:h-[100px]">
              <p className="text-4xl  pt-3 pr-1 md:pt-0 md:text-8xl text-center font-bold text-black">
                {formatBengaliNumber(remainingTime.seconds)}
              </p>
            </div>
            <strong className="md:text-xl font-bold">সেকেন্ড</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
