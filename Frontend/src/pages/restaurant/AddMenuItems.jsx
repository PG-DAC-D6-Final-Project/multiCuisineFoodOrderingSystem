import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddFoodItem() {
  const restaurantId = localStorage.getItem("restaurantId");
  const navigate = useNavigate();

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
    navigate("/restaurant/dashboard")
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Add Menu Item (Restaurant ID: {restaurantId})
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddFoodItem;
