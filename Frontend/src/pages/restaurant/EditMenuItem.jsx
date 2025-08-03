import React, { useState } from "react";

function EditMenuItem() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    cuisineType: "",
    availability: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Menu Item:", formData);
  };

  return (
    <div className="flex w-full">
        <div className="min-h-screen w-full flex items-center justify-center bg-orange-400 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-orange-400">Edit Menu Item</h2>

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
          <label className="block text-sm font-medium mb-1">Description</label>
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
          <label className="block text-sm font-medium mb-1">Cuisine Type</label>
          <input
            type="text"
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleChange}
            required
            placeholder="e.g., Indian, Chinese, Italian"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
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
          className="w-full bg-orange-400 text-white py-2 rounded hover:bg-red-700 font-semibold"
        >
          Save Changes
        </button>
      </form>
    </div>
    </div>
  );
}

export default EditMenuItem;
