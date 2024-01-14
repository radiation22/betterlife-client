import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Blog1 = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from the URL
    fetch("https://betterlife-server.vercel.app/blogs")
      .then((response) => response.json())
      .then((data) => {
        const anixetyBlog = data.filter((d) => d.category === "anxiety");
        setBlogs(anixetyBlog);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [blogs]);

  return (
    <div className="px-8">
      <h1 className="text-3xl">Anxiety</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
        {blogs?.slice(0, 4).map((blog) => (
          <Link to={`/details/${blog._id}`} key={blog._id}>
            <div
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
              className="border rounded-md p-4 hover:bg-gray-200"
            >
              <img src={blog.imageUrl} alt="" />
              <p className="text-gray-400 uppercase py-2">{blog.date}</p>
              <h1 className="text-2xl py-2">{blog.title}</h1>
              <p className="text-justify">
                {blog.description.slice(0, 100)} ...
              </p>
              <div className="flex justify-between mt-2">
                <FaEye />
                <p>654</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog1;
