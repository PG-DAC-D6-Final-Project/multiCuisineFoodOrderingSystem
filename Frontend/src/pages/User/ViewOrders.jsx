import React, { useEffect, useState } from "react";
import { getOrders } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("id");
  const navigate = useNavigate();

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const result = await getOrders(userId);
        if (result.status === 200) {
          const sorted = result.data.sort(
            (a, b) => new Date(b.order_date_time) - new Date(a.order_date_time)
          );
          setOrders(sorted);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadOrders();
  }, [userId]);

  const getStatusColor = (status) => {
    switch (status) {

      case "ORDERED":
        return "bg-orange-100 text-orange-700 border border-orange-300";
      case "ACCEPTED":
        return "bg-orange-200 text-orange-800 border border-orange-400";
      case "PREPARING":
        return "bg-orange-300 text-white border border-orange-400";
      case "ON_THE_WAY":
        return "bg-orange-400 text-white border border-orange-500";
      case "DELIVERED":
        return "bg-green-100 text-green-700 border border-green-300";
      default:
        return "bg-orange-100 text-orange-700 border border-orange-300";
    }
  };

  if (loading) {
    return (
      <p className="text-center mt-6 text-lg font-medium text-orange-500">
        Loading orders...
      </p>
    );
  }

  if (orders.length === 0) {
    return (
      <p className="text-center mt-6 text-lg font-medium text-orange-500">
        No orders found.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-orange-600">My Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-orange-200 p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {order.restaurant.name}
              </h2>
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(
                  order.orderstatus
                )}`}
              >
                {order.orderstatus}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-600 mb-4">
              <p>
                <span className="font-medium">Ordered on:</span>{" "}
                {new Date(order.order_date_time).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Delivery Time:</span>{" "}
                {new Date(order.delivery_date_time).toLocaleString()}
              </p>
            </div>

            <ul className="divide-y divide-gray-100 mb-4">
              {order.menuItems.map((item, index) => (
                <li
                  key={index}
                  className="py-2 flex justify-between text-gray-700"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-medium">₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-orange-200 pt-4 text-gray-800 font-medium space-y-1">
              <p className="flex justify-between">
                <span>Subtotal:</span> <span>₹{order.subtotal}</span>
              </p>
              <p className="flex justify-between">
                <span>Tax:</span>{" "}
                <span>₹{order.tax_amount.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Delivery Fee:</span> <span>₹{order.delivery_fee}</span>
              </p>
              <p className="flex justify-between text-green-600">
                <span>Discount:</span>{" "}
                <span>-₹{order.discount_amount.toFixed(2)}</span>
              </p>
              <p className="flex justify-between text-lg font-bold text-orange-600">
                <span>Total:</span> <span>₹{order.total_amount}</span>
              </p>
            </div>

            {/* Rate Order button only for DELIVERED orders */}
            {order.orderstatus === "DELIVERED" && (
              <div className="mt-4">
                <button
                  onClick={() =>
                    navigate(`/customer/review/${order.id}`)
                  }
                  className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                >
                  Rate Order
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewOrders;
