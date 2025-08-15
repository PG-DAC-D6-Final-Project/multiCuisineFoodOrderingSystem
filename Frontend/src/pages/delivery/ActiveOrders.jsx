import React, { useEffect, useState } from "react";
import ActiveOrderCard from "../../components/delivery/ActiveOrderCard";
import { getActiveOrders } from "../../services/deliveryAgentService";
import { Navigate } from "react-router-dom";

const ActiveOrders = () => {
  const [orders, setOrders] = useState([]);
  const deliveryAgentId = sessionStorage.getItem("deliveryId");

  useEffect(() => {
    const loadActiveOrders = async () => {
      try {
        const result = await getActiveOrders(deliveryAgentId);
        console.log(result);

        if (result.status === 200) {
          setOrders(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadActiveOrders();
  }, [deliveryAgentId]);

  if (sessionStorage.getItem("role") != "DELIVERY_AGENT") {
    return <Navigate to="/delivery/login" />
  }

  return (
    <div className="px-4 py-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        Active Orders
      </h1>

      <div className="flex flex-col justify-center items-center gap-6 my-10 w-full">
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <ActiveOrderCard
              key={index}
              id={item.id}
              customerAddress={item.customerAddress}
              restaurantAddress={item.restaurantAddress}
              customerName={item.customerName}
              restaurantName={item.restaurantName}
              onOrderDelivered={(orderId) =>
                setOrders((prevOrders) =>
                  prevOrders.filter((o) => o.id !== orderId)
                )
              }
            />
          ))
        ) : (
          <p className="text-gray-500 text-lg font-medium">
            No active orders at the moment 🚀
          </p>
        )}
      </div>
    </div>
  );
};

export default ActiveOrders;
