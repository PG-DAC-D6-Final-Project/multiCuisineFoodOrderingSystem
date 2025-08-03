import React, { useState } from 'react';

function ShowOrders() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const orders = [
    {
      id: 101,
      customerName: "Shubham Karjini",
      items: ["Paneer Butter Masala", "Garlic Naan"],
      total: 520,
      status: "Pending",
      time: "2025-07-23 12:45 PM",
    },
    {
      id: 102,
      customerName: "Girish Bora",
      items: ["Sushi Roll", "Miso Soup"],
      total: 680,
      status: "Delivered",
      time: "2025-07-23 11:15 AM",
    },
    {
      id: 103,
      customerName: "Gautam Agnihotri",
      items: ["Margherita Pizza", "Cold Coffee"],
      total: 430,
      status: "Preparing",
      time: "2025-07-23 1:05 PM",
    },
  ];

  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 p-6 overflow-auto bg-gray-100">
        <h1 className="text-2xl font-bold text-black mb-4">Received Orders</h1><hr  className="border-black border-t-2 my-4"/>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead className="bg-orange-400 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Order ID</th>
                <th className="py-2 px-4 text-left">Customer</th>
                <th className="py-2 px-4 text-left">Items</th>
                <th className="py-2 px-4 text-left">Total (₹)</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-orange-50 transition">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.customerName}</td>
                  <td className="py-2 px-4">
                    <ul className="list-disc list-inside">
                      {order.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-2 px-4">₹{order.total}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${
                        order.status === 'Delivered'
                          ? 'bg-green-200 text-green-800'
                          : order.status === 'Preparing'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowOrders;
