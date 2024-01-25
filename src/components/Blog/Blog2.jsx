import React, { useEffect, useState } from "react";
import blogPic from "../../assets/blog.webp";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const Blog2 = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from the URL
    fetch("https://betterlife-server.vercel.app/blogs")
      .then((response) => response.json())
      .then((data) => {
        const anixetyBlog = data.filter((d) => d.category === "depression");
        setBlogs(anixetyBlog);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [blogs]);
  return (
    <div className="px-8 mt-10">
      <h1 className="text-3xl">মানসিক বিষন্নতা (Depression)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-6">
        {blogs?.slice(0, 4).map((blog) => (
          <Link to={`/details/${blog._id}`} key={blog._id}>
            <div
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
              className="border rounded-lg  hover:bg-gray-200"
            >
              <img
                className="rounded-t-lg h-[190px] w-full"
                src={blog.imageUrl}
                alt=""
              />
              <div className="bg-[#36C5F0] h-[150px] rounded-b-lg p-4 text-white">
                {/* <p className="text-gray-400 uppercase py-2">{blog.date}</p> */}
                <h1 className="text-2xl py-2">{blog.title}</h1>
                <p className="text-justify">
                  {blog.description.slice(0, 100)}....
                </p>
              </div>
              {/* <div className="flex justify-between mt-2">
                <FaEye />
                <p>654</p>
              </div> */}
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-[#3AC6EF] text-white px-5 py-2 my-5 rounded-lg">
          <Link to="/blog">Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default Blog2;
