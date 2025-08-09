import React, { useEffect, useState } from "react";
import axios from "axios";
import { getOrders } from "../../services/userServices";

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("id");

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const result = await getOrders(userId);
        console.log(result);
        if (result.status === 200) {
          setOrders(result.data);
        }
        setLoading(false)
      }
      catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
    loadOrders();
  }, [userId]);

  const getStatusColor = (status) => {
    switch (status) {
      case "ORDERED": return "bg-gray-300 text-gray-800";
      case "ACCEPTED": return "bg-blue-200 text-blue-800";
      case "PREPARING": return "bg-yellow-200 text-yellow-800";
      case "ON_THE_WAY": return "bg-orange-200 text-orange-800";
      case "DELIVERED": return "bg-green-200 text-green-800";
      default: return "bg-gray-200 text-gray-800";
    }
  };

  if (loading) return <p className="text-center mt-6">Loading orders...</p>;
  if (orders.length === 0) return <p className="text-center mt-6">No orders found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      {orders.map(order => (
        <div key={order.id} className="bg-white shadow rounded-lg p-5 mb-5 border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">{order.restaurant.name}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.orderstatus)}`}>
              {order.orderstatus}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-1">
            Ordered on: {new Date(order.order_date_time).toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mb-3">
            Delivery Time: {new Date(order.delivery_date_time).toLocaleString()}
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-3">
            {order.menuItems.map(item => (
              <li key={item.id}>
                {item.name} - ₹{item.price} × {item.quantity}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center font-semibold">
            <span>Subtotal: ₹{order.subtotal}</span>
            <span>Total: ₹{order.total_amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewOrders;
