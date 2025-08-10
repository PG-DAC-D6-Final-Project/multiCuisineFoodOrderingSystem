import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrlNet } from "../../utils/config";
import { Button } from "../../components/ui/button";
import axios from "axios";

function AddFoodItem() {
  const restaurantId = localStorage.getItem("restaurantId");
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    cuisineType: "",
  });

  const cuisines = [
    { id: 1, name: "Indian" },
    { id: 2, name: "Italian" },
    { id: 3, name: "Mexican" },
    { id: 4, name: "Chinese" },
    { id: 5, name: "Mediterranean" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/menu-item/${restaurantId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price), // ensure number
          cuisineType: parseInt(formData.cuisineType), // ensure number
          image_url: imageUrl
        }),
      });
      if (res.ok) {
        alert("Menu item added successfully!");
        setFormData({ name: "", description: "", price: "", cuisineType: "" });
      } else {
        alert("Error adding menu item");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
    navigate("/restaurant/dashboard");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleUpload = async () => {
    try {
      const url = baseUrlNet + "/api/upload/image";
      const imageFormData = new FormData();
      if (imageFile) {
        imageFormData.append("file", imageFile);
      }

      const response = await axios.post(
        url, imageFormData
      );
      console.log(response.data);
      setIsUploaded(true);
      setImageUrl(response.data.imageUrl)
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl text-orange-400 font-bold mb-4 text-center">
          Add Menu Item
        </h2>
        <div>
          <label className="block mb-1 text-black font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded p-2"
          />
          {imagePreview && (
            <>
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 rounded-md max-w-[300px] max-h-[300px] object-contain"
              />
              {isUploaded === false ? <Button onClick={handleUpload} className="w-[50%] mt-2">Upload</Button>
                : <p className="mt-2">Uploaded</p>}
            </>
          )}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Item Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              rows="3"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Cuisine</label>
            <select
              name="cuisineType"
              value={formData.cuisineType}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">-- Select Cuisine --</option>
              {cuisines.map((cuisine) => (
                <option key={cuisine.id} value={cuisine.id}>
                  {cuisine.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
          >
            Add Item
          </button>
        </form>
      </div>
    </div >
  );
}

export default AddFoodItem;
