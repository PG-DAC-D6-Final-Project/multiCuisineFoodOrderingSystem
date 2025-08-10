import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { customerRegister } from "../../services/userServices";
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email && formData.firstName && formData.lastName && formData.password && formData.phone) {
      const result = await customerRegister(formData);

      toast.success("User registered successfully.")
      navigate("/customer/login");
    }
    else {
      toast.error("All fields are required.")
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">Register</h2>
      <form>
        <div className="mb-3 flex items-center">
          <label htmlFor="firstname" className="w-32">First name:</label>
          <input type="text" onChange={handleChange} name="firstName" id="firstname" required className="flex-1 border px-3 py-2 rounded" />
        </div>

        <div className="mb-3 flex items-center">
          <label htmlFor="lastname" className="w-32">Last name:</label>
          <input type="text" onChange={handleChange} name="lastName" id="lastname" required className="flex-1 border px-3 py-2 rounded" />
        </div>

        <div className="mb-3 flex items-center">
          <label htmlFor="email" className="w-32">Email:</label>
          <input type="email" onChange={handleChange} name="email" id="email" required className="flex-1 border px-3 py-2 rounded" />
        </div>

        <div className="mb-3 flex items-center">
          <label htmlFor="phone" className="w-32">Phone:</label>
          <input type="number" onChange={handleChange} name="phone" id="phone" required className="flex-1 border px-3 py-2 rounded" />
        </div>

        {/* <div className="mb-3 flex items-center">
          <label htmlFor="address" className="w-32">Address:</label>
          <input type="text" onChange={handleChange} name="address" id="address" required className="flex-1 border px-3 py-2 rounded" />
        </div> */}

        {/* <div className="mb-3 flex items-center">
          <label htmlFor="role" className="w-32">Role:</label>
          <select name="role" id="role" required className="flex-1 border px-3 py-2 rounded">
            <option value="">Select Role</option>
            <option value="deliverypartner">Delivery Partner</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div> */}

        {/* <div className="mb-3 flex items-center">
          <label htmlFor="image" className="w-32">Image:</label>
          <input type="file" name="image" id="image" accept="image/*" className="flex-1" />
        </div> */}

        <div className="mb-3 flex items-center">
          <label htmlFor="password" className="w-32">Password:</label>
          <input type="password" onChange={handleChange} name="password" id="password" required className="flex-1 border px-3 py-2 rounded" />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <Link to="/customer/login">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5"
            >
              Register
            </button>
          </Link>

          <Link to="/" className="w-full">
            <button
              type="button"
              className="w-full text-gray-800 bg-gray-200 hover:bg-gray-300 font-medium rounded text-sm px-5 py-2.5"
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
