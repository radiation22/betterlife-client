import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AddBlog = () => {
  const { handleSubmit, control, reset, register } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const uploadImageToImgBB = async (imageFile) => {
    try {
      // Create a FormData object to send the image file
      const formData = new FormData();
      formData.append("image", imageFile);

      // Your ImgBB API key
      const apiKey = "8ddaa6c8df804bd79444e3f5ea2c7fd5";

      // Make a POST request to the ImgBB API endpoint
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      // Check if the request was successful (status code 200)
      if (response.ok) {
        const data = await response.json();
        // The uploaded image URL is available in data.data.url
        return data.data.url;
      } else {
        // Handle the error if the request fails
        throw new Error("Image upload failed");
      }
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async (data) => {
    const imageUrl = await uploadImageToImgBB(selectedFile);
    console.log(data);
    const title = data.title;

    const description = data.description;

    const category = data.category;

    const property = {
      title,

      description,

      imageUrl,
      category,
      email: user?.email,
      date: new Date().toLocaleDateString(), // Format the date as desired
    };

    fetch("https://betterlife-server.vercel.app/addBlog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Added Successfully");
          navigate("/");
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Add New Blog From Here</h2>
      <div>
        <div className="container mx-auto p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block font-medium text-gray-700"
              >
                Title
              </label>
              <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    required
                    {...field}
                    type="text"
                    id="title"
                    className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                    placeholder="Enter title"
                  />
                )}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block font-medium text-gray-700"
              >
                Description
              </label>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    required
                    {...field}
                    id="message"
                    rows="4"
                    className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                    placeholder="Enter message"
                  />
                )}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block font-medium text-gray-700"
              >
                Category
              </label>
              <select
                {...register("category")} // Use register instead of Controller for select input
                id="category"
                required
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              >
                <option value="anxiety">Anxiety</option>
                <option value="depression">Depression</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block font-medium text-gray-700"
              >
                Photo
              </label>
              <Controller
                name="photo"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <input
                    required
                    {...field}
                    type="file"
                    id="photo"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                  />
                )}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
