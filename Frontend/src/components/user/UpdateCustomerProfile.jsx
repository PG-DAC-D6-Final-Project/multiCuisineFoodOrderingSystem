import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const UpdateCustomerProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: sessionStorage.getItem("firstName"),
    lastName: sessionStorage.getItem("lastName"),
    email: sessionStorage.getItem("email"),
    phone: sessionStorage.getItem("phone"),
  });

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: files ? files[0] : value,
  //   });
  // };

  const handleSave = () => {
    alert("Changes saved!");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  if (sessionStorage.getItem("role") != "CUSTOMER") {
    return <Navigate to="/customer/login" />
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 shadow rounded bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center text-orange-600">
        Update Profile
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            className="w-full border rounded px-3 py-2 bg-orange-50"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            className="w-full border rounded px-3 py-2 bg-orange-50"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="w-full border rounded px-3 py-2 bg-orange-50"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            className="w-full border rounded px-3 py-2 bg-orange-50"
          />
        </div>

        {/* <div>
          <label className="block text-sm mb-1 text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            className="w-full border rounded px-3 py-2 bg-orange-50"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700">Upload Image</label>
          <input
            type="file"
            name="image"
            className="w-full text-sm"
          />
        </div> */}

        {/* <div>
          <label className="block text-sm mb-1 text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            className="w-full border rounded px-3 py-2 bg-orange-50"
          />
        </div> */}

        {/* <div className="text-sm text-gray-600">
          Role: <span className="font-medium text-black">{formData.role}</span>
        </div> */}

        <div className="flex justify-between mt-4">
          <button
            onClick={handleSave}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Save Changes
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomerProfile;
