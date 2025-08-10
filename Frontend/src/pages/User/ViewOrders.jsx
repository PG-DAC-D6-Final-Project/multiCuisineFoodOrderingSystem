import React, { useEffect, useState } from "react";
import { getOrders } from "../../services/userServices";

// const dummyOrders = [
//   {
//     id: 1,
//     restaurant: { name: "Pizza Palace" },
//     order_date_time: "2025-08-09T13:10:00",
//     delivery_date_time: "2025-08-09T13:40:00",
//     subtotal: 450,
//     tax_amount: 81,
//     delivery_fee: 50,
//     discount_amount: 45,
//     total_amount: 536,
//     orderstatus: "ORDERED",
//     menuItems: [
//       { id: 101, name: "Margherita Pizza", price: 200, quantity: 1 },
//       { id: 102, name: "Garlic Bread", price: 150, quantity: 1 },
//       { id: 103, name: "Coke", price: 50, quantity: 2 }
//     ]
//   },
//   {
//     id: 2,
//     restaurant: { name: "Burger Barn" },
//     order_date_time: "2025-08-08T19:05:00",
//     delivery_date_time: "2025-08-08T19:35:00",
//     subtotal: 320,
//     tax_amount: 57.6,
//     delivery_fee: 50,
//     discount_amount: 32,
//     total_amount: 395.6,
//     orderstatus: "ON_THE_WAY",
//     menuItems: [
//       { id: 201, name: "Cheeseburger", price: 120, quantity: 2 },
//       { id: 202, name: "Fries", price: 80, quantity: 1 }
//     ]
//   },
//   {
//     id: 3,
//     restaurant: { name: "Sushi World" },
//     order_date_time: "2025-08-07T18:45:00",
//     delivery_date_time: "2025-08-07T19:20:00",
//     subtotal: 600,
//     tax_amount: 108,
//     delivery_fee: 50,
//     discount_amount: 60,
//     total_amount: 698,
//     orderstatus: "DELIVERED",
//     menuItems: [
//       { id: 301, name: "California Roll", price: 300, quantity: 1 },
//       { id: 302, name: "Salmon Nigiri", price: 150, quantity: 2 }
//     ]
//   }
// ];

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("id");

  useEffect(() => {
    // setTimeout(() => {
    //   setOrders(dummyOrders);
    //   setLoading(false);
    // }, 500);
    const loadOrders = async () => {
      try {
        const result = await getOrders(userId);
        console.log(result.data);

        if (result.status === 200) {
          const sorted = result.data.sort((a, b) => new Date(b.order_date_time) - new Date(a.order_date_time));
          setOrders(result.data)
          setLoading(false)
        }
      }
      catch (e) {
        console.log(e);
      }
    }
    loadOrders()
  }, [userId]);

  const getStatusColor = (status) => {
    switch (status) {
      case "ORDERED": return "bg-orange-100 text-orange-700 border border-orange-300";
      case "ACCEPTED": return "bg-orange-200 text-orange-800 border border-orange-400";
      case "PREPARING": return "bg-orange-300 text-white border border-orange-400";
      case "ON_THE_WAY": return "bg-orange-600 text-white border border-orange-500";
      case "DELIVERED": return "bg-green-100 text-green-700 border border-green-300";
      default: return "bg-orange-100 text-orange-700 border border-orange-300";
    }
  };

  if (loading) {
    return <p className="text-center mt-6 text-lg font-medium text-orange-500">Loading orders...</p>;
  }

  if (orders.length === 0) {
    return <p className="text-center mt-6 text-lg font-medium text-orange-500">No orders found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-orange-600">My Orders</h1>
      <div className="space-y-6">
        {orders.map(order => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-orange-200 p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{order.restaurant.name}</h2>
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(order.orderstatus)}`}
              >
                {order.orderstatus}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-600 mb-4">
              <p><span className="font-medium">Ordered on:</span> {new Date(order.order_date_time).toLocaleString()}</p>
              <p><span className="font-medium">Delivery Time:</span> {new Date(order.delivery_date_time).toLocaleString()}</p>
            </div>

            <ul className="divide-y divide-gray-100 mb-4">
              {order.menuItems.map((item, index) => (
                <li key={index} className="py-2 flex justify-between text-gray-700">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="font-medium">₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-orange-200 pt-4 text-gray-800 font-medium space-y-1">
              <p className="flex justify-between"><span>Subtotal:</span> <span>₹{order.subtotal}</span></p>
              <p className="flex justify-between"><span>Tax:</span> <span>₹{order.tax_amount.toFixed(2)}</span></p>
              <p className="flex justify-between"><span>Delivery Fee:</span> <span>₹{order.delivery_fee}</span></p>
              <p className="flex justify-between text-green-600"><span>Discount:</span> <span>-₹{order.discount_amount.toFixed(2)}</span></p>
              <p className="flex justify-between text-lg font-bold text-orange-600"><span>Total:</span> <span>₹{order.total_amount}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewOrders;
