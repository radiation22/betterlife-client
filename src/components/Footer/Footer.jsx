import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookMessenger,
} from "react-icons/fa";
import logo from "../../assets/better life logo.png";
import play from "../../assets/play.png";
import location from "../../assets/location.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const openMessengerChat = () => {
    // Implement the logic to open your messenger here
    // This can include opening a chat modal or linking to your messenger app.
    // You may use a JavaScript framework like React Modal or a chat widget.
    // For this example, we'll just log a message.
    console.log("Opening messenger chat...");
  };
  return (
    <div className="w-full pt-10 bg-[#49164B]">
      <footer className=" pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left lg:text-left">
            <div className="w-full">
              <div>
                <div>
                  <img className="mx-auto lg:mx-0 h-[80px]" src={logo} alt="" />
                </div>
              </div>
            </div>

            <div>
              <div className="w-full text-center md:text-left">
                <span className="block uppercase text-white text-lg font-semibold mb-2">
                  বেটারলাইফ
                </span>
                <ul className="list-unstyled">
                  <Link to="/privacy">
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        গোপনীয়তা নীতি
                      </a>
                    </li>
                  </Link>
                  <li>
                    <a
                      className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      ব্যবহারের শর্তাবলী
                    </a>
                  </li>
                  <div className="">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.nirapode1.nirapode1&pcampaignid=web_share&pli=1"
                    >
                      {/* <img className="mx-auto lg:mx-0" src={play} alt="" /> */}
                    </a>
                  </div>
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="">
                <div className="text-center">
                  <h4 className="text-xl text-white mt-2 font-semibold">
                    আমাদের সহযোগিতা ও কার্যক্রম
                  </h4>

                  <div className="flex justify-center gap-1 items-center">
                    {/* <div>
                      <img className="h-8" src={location} alt="" />
                    </div> */}
                    <div>
                      <p className="text-lg mt-0  text-white">
                        আলমস্ আইকন,মুরাদপুর মোড়, মুরাদপুর
                      </p>
                      <p className="text-lg mt-0 mb-2 text-white">
                        পাঁচলাইশ, চট্টগ্রাম
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 lg:mb-0 mb-6">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/niraapode?mibextid=ZbWKwL"
                    >
                      <button
                        className="text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <FaFacebookF className="text-white w-full text-center text-xl" />
                      </button>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/radiationcorp/"
                    >
                      <button
                        className=" text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <FaInstagram className="text-white w-full text-center text-xl" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                কপিরাইট-Betterlife365 © 2024{" "}
                <span className="text-secondary">সর্বস্বত্ব সংরক্ষিত</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
