import React from "react";
import Card from "../Card/Card";
import bg from "../../assets/ilst1.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" py-10 md:px-5">
      <div className="w-full">
        <Card></Card>
      </div>
    </div>
  );
};

export default Banner;
