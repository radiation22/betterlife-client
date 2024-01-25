import React, { useState } from "react";
import callbg from "../../assets/call (2).png";
import icon from "../../assets/callIcon.png";

const CallSubmit = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    number: "",
    about: "",
    callDuration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-10 py-5 bg-[#DCE2EF]">
      <div className="">
        <img className="h-28 mx-auto" src={icon} alt="" />
        <h1 className="text-xl text-center md:text-5xl text-[#40AD81]">
          ধন্যবাদ ! <br /> আমাদের একজন কাউনসেলর আপনাকে শীগ্রই ফোন করবেন !
        </h1>
      </div>
      <div>
        <img src={callbg} alt="" />
      </div>
    </div>
  );
};

export default CallSubmit;
