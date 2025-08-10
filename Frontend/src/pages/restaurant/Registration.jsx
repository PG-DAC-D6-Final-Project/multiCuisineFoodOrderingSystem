import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Step 1

const RegistrationPage = () => {
  const navigate = useNavigate(); // ✅ Step 2
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   console.log("User Logged In:", formData);
  //   alert("Login Successful!");

  //   // ✅ Step 3: Redirect to dashboard
  //   navigate("/restaurant/dashboard");
  // };
const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    const response = await axios.post("http://localhost:8080/restaurant/", {
      email: formData.username,
      password: formData.password
    });

    const resData = response.data;
    console.log(resData);

    if (resData.message === "Restaurant Login successful...") {
      alert("Login Successful!");

      // Store restaurantId in localStorage
      localStorage.setItem("restaurantId", resData.restaurantId);

      navigate("/restaurant/Dashboard");
    } else {
      alert(resData.message);
    }

  } catch (error) {
    console.error("Login failed:", error);
    alert("Server error during login.");
  }
};



  return (
    <div className="flex justify-center items-center h-[100vh] p-4 text-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">SignIn</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className='text-black text-3xl text-center'>Login</h2>

          <div>
            <label className="block mb-1 text-black font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-black"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div>
            <label className="block mb-1 text-black font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-black"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
