import React, { useState } from "react";
import callbg from "../../assets/call (2).png";
import { useNavigate } from "react-router-dom";

const Callpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    number: "",
    about: "",
    callDuration: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCallDurationClick = async (duration) => {
    if (
      !formData.name ||
      !formData.age ||
      !formData.number ||
      !formData.about
    ) {
      window.alert("Please fill in all input fields before submitting.");
      return;
    }

    // Show confirmation alert
    const confirmed = window.confirm(
      "Are you sure you want to book with this duration?"
    );
    if (!confirmed) {
      return; // If not confirmed, do nothing
    }

    // Update state
    setFormData((prevData) => ({ ...prevData, callDuration: duration }));

    // Submit form
    try {
      // Use the updated formData inside this block
      const response = await fetch(
        "https://betterlife-server.vercel.app/callBook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle successful response, e.g., show a success message
        console.log("Form data submitted successfully!");
        navigate("/callSubmit");
      } else {
        // Handle error response
        console.error("Error submitting form data:", response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-10 py-5">
      <div>
        <h1 className="text-xl md:text-5xl text-[#E01E5A]">
          দৈনিক ৪ জন ফ্রী ভিজিট কল করতে পারবেন
        </h1>
        <h1 className="text-xl md:text-2xl text-[#49164B]">
          আজকের দিনে সাক্ষাত করার সুযোগ আছে{" "}
          <span className="bg-[#49164B] text-white p-1 rounded-md">০৪</span> জন
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
              className="border placeholder-white px-2 py-4 outline-green-700 rounded-md bg-[#36C5F0] text-white"
              placeholder="আপনার নাম"
              required
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
                className="border placeholder-white outline-green-700 w-full px-2 py-4 rounded-md bg-[#36C5F0] text-white"
                placeholder="বয়স"
                required
              />
            </div>

            <div className="flex flex-col mb-4 w-full">
              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="border placeholder-white outline-green-700 px-2 w-full py-4 rounded-md bg-[#36C5F0] text-white"
                placeholder="মোবাইল/Whatsapp No"
                required
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <input
              id="about"
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="border placeholder-white outline-green-700 px-2 py-4 rounded-md bg-[#36C5F0] text-white"
              placeholder="যে বিষয়ে কথা বলতে চাচ্ছেন"
              required
            />
          </div>
          <div className="flex justify-between mb-4">
            <button
              type="button"
              onClick={() => handleCallDurationClick("15 min")}
              className="py-1 px-3 md:px-10 md:py-3 bg-[#37C837] text-white rounded-md"
            >
              ১৫ মিনিট
            </button>
            <button
              type="button"
              onClick={() => handleCallDurationClick("30 min")}
              className="py-1 px-3 md:px-10 md:py-3 bg-[#37C837] text-white rounded-md"
            >
              ৩০ মিনিট
            </button>
            <button
              type="button"
              onClick={() => handleCallDurationClick("30+ min")}
              className="py-1 px-3 md:px-10 md:py-3 bg-[#37C837] text-white rounded-md"
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
