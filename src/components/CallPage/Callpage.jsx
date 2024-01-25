import React, { useState } from "react";
import callbg from "../../assets/call (2).png";

const Callpage = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-10 py-5">
      <div>
        <h1 className="text-xl md:text-5xl text-[#E01E5A]">
          দৈনিক ৪ জন ফ্রী ভিজিট কল করতে পারবেন
        </h1>
        <h1 className="text-xl md:text-2xl text-[#49164B]">
          আজকের দিনে সাক্ষাত করার সুযোগ আছে ৪ জন
        </h1>

        {/* Form */}
        <form className="mt-4 md:w-[80%]">
          <div className="flex flex-col mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border placeholder-white px-2 py-4 rounded-md bg-[#36C5F0] text-white"
              placeholder="আপনার নাম"
            />
          </div>

          <div className="flex gap-5 w-full">
            <div className="flex flex-col mb-4 w-full">
              <input
                type="text"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="border placeholder-white w-full px-2 py-4 rounded-md bg-[#36C5F0] text-white"
                placeholder="বয়স"
              />
            </div>

            <div className="flex flex-col mb-4 w-full">
              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="border placeholder-white px-2 w-full py-4 rounded-md bg-[#36C5F0] text-white"
                placeholder="মোবাইল/Whatsapp No"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <input
              id="about"
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="border placeholder-white px-2 py-4 rounded-md bg-[#36C5F0] text-white"
              placeholder="যে বিষয়ে কথা বলতে চাচ্ছেন"
            />
          </div>
          <div className="flex justify-between mb-4">
            <button
              type="button"
              onClick={() => handleCallDurationClick("15 min")}
              className="py-1 px-3 md:px-8 md:py-3 bg-[#37C837] text-white rounded-md"
            >
              ১৫ মিনিট
            </button>
            <button
              type="button"
              onClick={() => handleCallDurationClick("30 min")}
              className="py-1 px-3 md:px-8 md:py-3 bg-[#37C837] text-white rounded-md"
            >
              ৩০ মিনিট
            </button>
            <button
              type="button"
              onClick={() => handleCallDurationClick("30+ min")}
              className="py-1 px-3 md:px-8 md:py-3 bg-[#37C837] text-white rounded-md"
            >
              ৩০+ মিনিট
            </button>
          </div>
        </form>
      </div>
      <div>
        <img src={callbg} alt="" />
      </div>
    </div>
  );
};

export default Callpage;