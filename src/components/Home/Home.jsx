import React from "react";
import Banner from "../Banner/Banner";
import ImageSlider from "../Slider/Slider";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import "./home.css";
import Footer from "../Footer/Footer";

import Video from "../Video/Video";
import Messenger from "../Messenger/Messenger";

import Faq from "../Faq/Faq";
import Blog1 from "../Blog/Blog1";
import Blog2 from "../Blog/Blog2";
import Gift from "../Gift/Gift";
import Reviews from "../Reviews/Reviews";
import Counter from "../Counter/Counter";
import CountVisit from "../CountVisit/CountVisit";
import Counsil from "../Counseling/Counsil";
import Offer from "../Offer/Offer";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Counsil></Counsil>
      <Blog1></Blog1>
      <Blog2></Blog2>
      <Offer></Offer>
      <Gift></Gift>
      <Faq></Faq>
      <Reviews></Reviews>

      <Counter></Counter>

      <div className="">
        <Messenger></Messenger>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
