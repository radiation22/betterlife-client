import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../assets/hero-image.webp";
import { FaEye } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
const BlogHome = () => {
  const queryKey = ["blogs"];

  const { data: blogs = [], refetch } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const url = "https://betterlife-server.vercel.app/blogs";
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="px-8 py-10">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
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
              <div className="p-4 bg-[#2AB67D] rounded-b-lg text-white">
                <p className="text-gray-300 uppercase py-2">{blog.category}</p>
                <h1 className="text-2xl py-2">{blog.title}</h1>
                <p>{blog.description.slice(0, 150)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogHome;
