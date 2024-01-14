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
    <div className="px-8">
      <h1 className="text-center text-4xl py-4">Read Our Blog</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog) => (
          <Link to={`/details/${blog._id}`} key={blog._id}>
            <div
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
              className="border rounded-md p-4 hover:bg-gray-200"
            >
              <img className="h-[200px]" src={blog.imageUrl} alt="" />
              <p className="text-gray-400 uppercase py-2">{blog.category}</p>
              <h1 className="text-2xl py-2">{blog.title}</h1>
              <p>{blog.description.slice(0, 120)}</p>
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

export default BlogHome;
