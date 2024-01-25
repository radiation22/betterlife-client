import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AddBlog = () => {
  const { handleSubmit, control, register, watch } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const uploadImageToImgBB = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const apiKey = "8ddaa6c8df804bd79444e3f5ea2c7fd5";

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data.data.url;
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
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

    const title = data.title;
    const description = data.description;
    const category =
      data.category === "Add New" ? data.customCategory : data.category;

    const property = {
      title,
      description,
      imageUrl,
      category,
      email: user?.email,
      date: new Date().toLocaleDateString(),
    };

    console.log(property);

    fetch("https://betterlife-server.vercel.app/addBlo", {
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
                {...register("category")}
                id="category"
                required
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              >
                <option value="anxiety">Anxiety</option>
                <option value="depression">Depression</option>
                <option value="Add New">Add New</option>
              </select>
              {watch("category") === "Add New" && (
                <input
                  {...register("customCategory")}
                  type="text"
                  className="mt-2 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                  placeholder="Enter custom category"
                />
              )}
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
