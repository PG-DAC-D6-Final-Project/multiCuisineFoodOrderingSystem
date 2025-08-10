import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowOrders() {
  const [orders, setOrders] = useState([]);
  const restaurantId = localStorage.getItem("restaurantId");; // change as per login/session

  // Fetch orders
  useEffect(() => {
    axios.get(`http://localhost:8080/order/${restaurantId}`)
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  // status changing
 const handleStatusChange = (orderId, newStatus) => {
  setOrders(prevOrders =>
    prevOrders.map(order =>
      order.id === orderId
        ? { ...order, orderstatus: newStatus } // update matching order's status
        : order // leave as it is
    )
  );
};

  // Save status change
  const saveStatus = (orderId, status) => {
  axios.patch(`http://localhost:8080/order/status`, {
    orderId: orderId,
    status: status
  })
  .then(() => alert(`Status updated to ${status}`))
  .catch(err => console.error(err));
};

  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 p-6 overflow-auto bg-gray-100">
        <h1 className="text-2xl font-bold text-black mb-4">Received Orders</h1>
        <hr className="border-black border-t-2 my-4" />
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
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-orange-50 transition">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{`${order.user.firstName} ${order.user.lastName}`}</td>
                  <td className="py-2 px-4">
                    <ul className="list-disc list-inside">
                      {order.menuItems?.map((item, index) => (
                        <li key={index}>{item.name}</li>
                      )) || <li>No items</li>}
                    </ul>
                  </td>
                  <td className="py-2 px-4">₹{order.total_amount}</td>
                  <td className="py-2 px-4">
                    <select
                      value={order.orderstatus}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      <option value="ORDERED">ORDERED</option>
                      <option value="PREPARING">PREPARING</option>
                      <option value="ON_THE_WAY">ON_THE_WAY</option>
                      <option value="DELIVERED">DELIVERED</option>
                      <option value="REJECTED">REJECTED</option>
                      
                    </select>
                  </td>
                  <td className="py-2 px-4">{new Date(order.order_date_time).toLocaleString()}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => saveStatus(order.id, order.orderstatus)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Save
                    </button>
                  </td>
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
