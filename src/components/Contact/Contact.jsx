import React, { useState } from "react";
import icon1 from "../../assets/help.png";
import icon2 from "../../assets/call.png";
import icon3 from "../../assets/email.png";

const Contact = () => {
  const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
  const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
  const [isAccordionOpen3, setIsAccordionOpen3] = useState(false);

  const toggleAccordion1 = () => {
    setIsAccordionOpen1(!isAccordionOpen1);
    setIsAccordionOpen2(false);
    setIsAccordionOpen3(false);
  };

  const toggleAccordion2 = () => {
    setIsAccordionOpen1(false);
    setIsAccordionOpen2(!isAccordionOpen2);
    setIsAccordionOpen3(false);
  };

  const toggleAccordion3 = () => {
    setIsAccordionOpen1(false);
    setIsAccordionOpen2(false);
    setIsAccordionOpen3(!isAccordionOpen3);
  };

  return (
    <div id="contact" className="px-10 pt-10">
      <h1 className=" text-white py-10 text-4xl lg:text-5xl ps-5">
        হেল্পলাইন / যোগাযোগ
      </h1>
      <hr />
      <div className="my-20">
        <div
          onClick={toggleAccordion1}
          className={`flex justify-between bg-white shadow-xl rounded-xl mt-5 p-5 ${
            isAccordionOpen1 ? "mb-5" : ""
          }`}
        >
          <div className="flex gap-4">
            <img className="h-8" src={icon1} alt="" />
            <p className="text-[#979797] font-bold">সাহায্য কেন্দ্র</p>
          </div>
          <a>
            <button className="bg-[#9EDD2A] text-white px-4 py-1 rounded-xl">
              যোগাযোগ করুন
            </button>
          </a>
        </div>

        {isAccordionOpen1 && (
          <div className="p-3 bg-gray-200 border rounded-xl">
            <p>যোগাযোগ করুন:</p>
            <p>ফোনঃ 01633032867</p>
          </div>
        )}

        <div
          onClick={toggleAccordion2}
          className={`flex justify-between shadow-xl bg-white rounded-xl mt-5 p-5 ${
            isAccordionOpen2 ? "mb-5" : ""
          }`}
        >
          <div className="flex gap-4">
            <img className="h-8" src={icon2} alt="" />
            <p className="text-[#979797] font-bold">কল</p>
          </div>
          <a href="tel:01620777">
            <button className="bg-[#9EDD2A] text-white px-4 py-1 rounded-xl">
              যোগাযোগ করুন
            </button>
          </a>
        </div>

        {isAccordionOpen2 && (
          <div className="p-3 bg-gray-200 rounded-xl">
            <p>যোগাযোগ করুন:</p>
            <p>ফোনঃ 01633032867</p>
          </div>
        )}

        <div
          className={`flex justify-between shadow-xl bg-white rounded-xl mt-5 p-5 ${
            isAccordionOpen3 ? "mb-5" : ""
          }`}
        >
          <div className="flex gap-4">
            <img className="h-8" src={icon3} alt="" />
            <p className="text-[#979797] font-bold">ই-মেইল</p>
          </div>
          <a href="mailto:radiationcorporation2@gmail.com">
            <button className="bg-[#9EDD2A] text-white px-4 py-1 rounded-xl">
              যোগাযোগ করুন
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
