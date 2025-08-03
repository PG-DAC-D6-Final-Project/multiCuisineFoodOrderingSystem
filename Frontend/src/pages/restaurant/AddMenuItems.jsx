import React, { useState } from "react";

function AddFoodItem() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    price: "",
    cuisineType: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("Food item added successfully!");
    console.log("Food Item Submitted:", foodData);
  };

  return (
    <div className="flex w-full">
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-orange-400">
          Add Food Item
        </h2>

        {successMsg && (
          <p className="text-green-600 text-center text-sm">{successMsg}</p>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={foodData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={foodData.description}
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
            value={foodData.price}
            onChange={handleChange}
            required
            min="1"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Cuisine Type</label>
          <select
            name="cuisineType"
            value={foodData.cuisineType}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select Cuisine</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Thai">Thai</option>
            <option value="Continental">Continental</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-400 text-white font-semibold py-2 rounded hover:bg-red-700"
        >
          Add Item
        </button>
      </form>
    </div>
    </div>
  );
}

export default AddFoodItem;
