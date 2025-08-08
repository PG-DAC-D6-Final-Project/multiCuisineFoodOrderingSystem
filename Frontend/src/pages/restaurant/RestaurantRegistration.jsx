import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RestaurantRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    openingTime: "",
    closingTime: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addressObj = {
      addressLine1: formData.addressLine1,
      addressLine2: formData.addressLine2,
      city: formData.city,
      state: formData.state,
      country: formData.country,
      pinCode: formData.pincode,
    };

    // Convert time inputs to ISO LocalDateTime
    const today = new Date().toISOString().split("T")[0]; // e.g., "2025-08-07"
    const openingDateTime = `${today}T${formData.openingTime}:00`;
    const closingDateTime = `${today}T${formData.closingTime}:00`;

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      opening_time: openingDateTime,
      closing_time: closingDateTime,
      address: addressObj,
    };

    // } catch (error) {
    //   console.error(
    //     "Registration failed:",
    //     error.response?.data || error.message
    //   );
    //   alert("Registration failed. Check console for details.");
    // }

    try {
      const response = await axios.post(
        "http://localhost:8080/restaurant/Register",
        payload
      );
      alert("Restaurant Registered Successfully!");
      console.log(response.data);
      navigate("/restaurant/");
    } catch (error) {
      console.log(error)
      const backendMessage = error?.response?.data?.errorMessage;

      if (backendMessage?.includes("Restaurant Email Already Exists...")) {
        alert("A restaurant with this email already exists. Please login.");
        navigate("/restaurant/"); // redirect to login
      } else if (backendMessage?.includes("Restaurant Already Exists...")) {
        alert("A restaurant with this name already exists. Try another name.");
      } else {
        alert("Registration failed. Check console for details."+backendMessage);
      }
    }

    console.log("Final Payload:", payload);
  };

  return (
    <div className="min-h-screen bg-orange-400 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-orange-400">
          Restaurant Registration
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

        {/* <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div> */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Address Lane 1
          </label>
          <input
            type="text"
            name="addressLane1"
            value={formData.addressLine1}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Address Lane 2
          </label>
          <input
            type="text"
            name="addressLane2"
            value={formData.addressLine2}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              pattern="[0-9]{6}"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Opening Time
            </label>
            <input
              type="time"
              name="openingTime"
              value={formData.openingTime}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Closing Time
            </label>
            <input
              type="time"
              name="closingTime"
              value={formData.closingTime}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-400 text-white font-semibold py-2 rounded hover:bg-red-700"
        >
          Register
        </button>

        <button
          type="button"
          onClick={() => navigate("/restaurant/")}
          className="w-full text-orange-400 font-semibold py-2 rounded hover:underline"
        >
          Already have an account? Sign In
        </button>
      </form>
    </div>
  );
}

export default RestaurantRegistration;
