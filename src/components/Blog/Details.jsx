import React, { useEffect, useState } from "react";
import blog from "../../assets/mv-office.png";
import { FaEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    // Fetch data from the URL
    fetch(`https://betterlife-server.vercel.app/details/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  return (
    <div className="md:px-10">
      <h1 className="text-center text-4xl py-4">Read Our Blog</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[70%] p-10">
          <div className="py-2">
            <h1 className="text-2xl">{details.title}</h1>
            <p>{details.date}</p>
          </div>
          <img className="w-full" src={details.imageUrl} alt="" />
          <div className="flex items-center gap-3 mt-2 justify-between mx-auto">
            <p className="text-gray-400 uppercase">{details.category}</p>
            <div>
              <FaEye />
              <p>654</p>
            </div>
          </div>
          <p className="text-2xl font-bold">Description</p>
          <p>{details.description}</p>
        </div>
        <div className="w-full py-8 px-4 md:w-[30%]">
          <p className="text-xl font-bold">Popular Post</p>
          <h1 className="font-bold">Family and Pet-Friendly</h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
