import { Bell } from "lucide-react";
import OrderCard from "./OrderCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const OrdersView = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState(""); // NEW

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/order");
        setOrders(response.data);
      } catch (err) {
        console.log(err);
        toast.error("Failed to fetch orders");
      }
    };
    fetchOrders();
  }, []);

  const calculateActiveOrder = () => {
    return orders.filter(
      (order) =>
        order.orderstatus !== "DELIVERED" && order.orderstatus !== "CANCELLED"
    ).length;
  };

  // Combined filtering: search + status
  const filteredOrders = orders.filter((order) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      order.id.toString().includes(term) ||
      `${order.user?.firstName || ""} ${order.user?.lastName || ""}`
        .toLowerCase()
        .includes(term) ||
      order.restaurant?.name?.toLowerCase().includes(term);

    const matchesStatus =
      statusFilter === "" ||
      order.orderstatus?.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      {/* Search & Filters Bar */}
      <div className="p-3 bg-white rounded-lg mb-2">
        <div className="flex justify-evenly p-2 gap-2 items-center">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
          />

          {/* Status Filter */}
          <select
            className="border border-gray-300 rounded-md px-4 py-2 mb-3 text-sm text-gray-700"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="ORDERED">Ordered</option>
            <option value="PREPARING">Preparing</option>
            <option value="ON_THE_WAY">On the Way</option>
            <option value="DELIVERED">Delivered</option>
            <option value="CANCELLED">Cancelled</option>
          </select>

          {/* Date Filter - Not wired yet */}
          <select className="border border-gray-300 rounded-md px-4 py-2 mb-3 text-sm text-gray-700">
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>This Month</option>
          </select>

          {/* Active Orders Counter */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="bg-orange-100 rounded-full p-2">
                <Bell className="text-orange-500 w-5 h-5" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Active Orders</p>
              <p className="text-lg font-bold">{calculateActiveOrder()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white p-4">
        <h2>Orders ({filteredOrders.length})</h2>
        <hr className="text-gray-300 mt-3" />

        <div>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderCard order={order} key={order.id} />
            ))
          ) : (
            <p className="text-center text-gray-500 py-6">
              No orders match your filters
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default OrdersView;
