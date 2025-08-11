import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditMenuItem() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Get menuItemId from URL
  const { id } = useParams();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    cuisineType: "",
    availability: true,
  });

  // Fetch item details when page loads. NOT WORKING 
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/menu-item/item/${id}`) // You'll need a GET by ID API
  //     .then((res) => setFormData(res.data))
  //     .catch((err) => console.error("Error fetching menu item:", err));
  // }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send update request to backend
    axios
      .patch(`http://localhost:8080/menu-item/${id}`, formData)
      .then(() => {
        alert("Menu item updated successfully!");
        navigate("/restaurant/Dashboard");
      })
      .catch((err) => {
        console.error("Error updating menu item:", err);
        alert("Failed to update item.");
      });
  };

  return (
    <div className="flex w-full">
      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 border rounded-xl shadow-md w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-orange-400">
            Edit Menu Item
          </h2>

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              min="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Cuisine Type
            </label>
            <select
              name="cuisineType"
              value={formData.cuisineType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="">-- Select Cuisine --</option>
              {[
                { id: 1, name: "Indian" },
                { id: 2, name: "Italian" },
                { id: 3, name: "Mexican" },
                { id: 4, name: "Chinese" },
                { id: 5, name: "Mediterranean" },
              ].map((cuisine) => (
                <option key={cuisine.id} value={cuisine.id}>
                  {cuisine.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="availability"
              checked={formData.availability}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label className="text-sm">Available</label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded hover:bg-red-700 font-semibold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditMenuItem;
