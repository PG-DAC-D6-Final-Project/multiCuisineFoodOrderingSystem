import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditRestaurantProfile() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    opening_time: "",
    closing_time: "",
    minimum_order_amount: "",
    status: "ACTIVE",
    address: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      pinCode: ""
    }
  });

  const restaurantId = 12; // Example — replace with actual ID or get from route

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurant/${restaurantId}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching restaurant:", err);
      });
  }, [restaurantId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For nested address fields
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8080/restaurant/${restaurantId}`, formData)
      .then((res) => {
        console.log("Updated successfully:", res.data);
        alert("Restaurant updated!");
      })
      .catch((err) => {
        console.error("Error updating restaurant:", err);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl text-orange-400 font-bold mb-6">Edit Restaurant Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Opening Time */}
        <input
          type="datetime-local"
          name="opening_time"
          value={formData.opening_time}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Closing Time */}
        <input
          type="datetime-local"
          name="closing_time"
          value={formData.closing_time}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Minimum Order Amount */}
        <input
          type="number"
          step="0.01"
          name="minimum_order_amount"
          placeholder="Minimum Order Amount"
          value={formData.minimum_order_amount}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Status Radio Buttons */}
        <div>
          <label className="block font-medium mb-1">Status</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="status"
                value="ACTIVE"
                checked={formData.status === "ACTIVE"}
                onChange={handleChange}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="INACTIVE"
                checked={formData.status === "INACTIVE"}
                onChange={handleChange}
              />
              Inactive
            </label>
          </div>
        </div>

        {/* Address Fields */}
        <input
          type="text"
          name="address.addressLine1"
          placeholder="Address Line 1"
          value={formData.address.addressLine1}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="address.addressLine2"
          placeholder="Address Line 2"
          value={formData.address.addressLine2}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="address.city"
          placeholder="City"
          value={formData.address.city}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="address.state"
          placeholder="State"
          value={formData.address.state}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="address.country"
          placeholder="Country"
          value={formData.address.country}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="address.pinCode"
          placeholder="Pincode"
          value={formData.address.pinCode}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
        >
          Update Restaurant
        </button>
      </form>
    </div>
  );
}
