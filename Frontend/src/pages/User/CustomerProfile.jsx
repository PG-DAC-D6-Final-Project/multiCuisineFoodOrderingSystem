import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerProfile = () => {
  const navigate = useNavigate();

  const dummyData = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "9876543210",
    address: "123 Street, City",
    role: "Customer",
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 shadow rounded bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center text-orange-600">
        Customer Profile
      </h2>

      <div className="space-y-2 text-gray-700">
        <p><strong>First Name:</strong> {dummyData.firstName}</p>
        <p><strong>Last Name:</strong> {dummyData.lastName}</p>
        <p><strong>Email:</strong> {dummyData.email}</p>
        <p><strong>Phone:</strong> {dummyData.phone}</p>
        <p><strong>Address:</strong> {dummyData.address}</p>
        <p><strong>Role:</strong> {dummyData.role}</p>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/customer/UpdateCustomerProfile")}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Update Profile
        </button>
        <button
          onClick={() => navigate("/customer/orders")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Past Orders
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CustomerProfile;
