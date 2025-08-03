import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerPastOrders = () => {
  const navigate = useNavigate();

  const pastOrders = [
    { id: 1, dish: "Paneer Tikka", date: "2025-07-10", restaurant: "Spicy Hub", price: "₹250" },
    { id: 2, dish: "Butter Chicken", date: "2025-07-08", restaurant: "Curry Nation", price: "₹320" },
    { id: 3, dish: "Veg Biryani", date: "2025-07-05", restaurant: "Tandoori Treat", price: "₹180" },
    { id: 4, dish: "Chicken Momos", date: "2025-07-02", restaurant: "Urban Grill", price: "₹120" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold text-center text-orange-600 mb-6">
        Past Orders
      </h2>

      <div className="space-y-4">
        {pastOrders.map((order) => (
          <div key={order.id} className="border rounded p-4 bg-orange-50 shadow-sm">
            <p><span className="font-semibold">Dish:</span> {order.dish}</p>
            <p><span className="font-semibold">Date:</span> {order.date}</p>
            <p><span className="font-semibold">Restaurant:</span> {order.restaurant}</p>
            <p><span className="font-semibold">Price:</span> {order.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/profile')}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default CustomerPastOrders;
