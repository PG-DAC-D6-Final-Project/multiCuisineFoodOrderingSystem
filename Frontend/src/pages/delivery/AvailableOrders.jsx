import React, { useEffect, useState } from "react";
import AvailableOrderCard from "../../components/delivery/AvailableOrderCard";
import { getAvailableOrders } from "../../services/deliveryAgentService";
import { Navigate } from "react-router-dom";

const AvailableOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadAvailableOrders = async () => {
      try {
        const result = await getAvailableOrders();
        console.log(result);

        if (result.status === 200) {
          setOrders(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadAvailableOrders();
  }, []);

  if (sessionStorage.getItem("role") != "DELIVERY_AGENT") {
    return <Navigate to="/delivery/login" />
  }

  return (
    <div className="px-4 py-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        Available Orders
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <AvailableOrderCard
              key={index}
              id={item.id}
              customerAddress={item.customerAddress}
              restaurantAddress={item.restaurantAddress}
              restaurantName={item.restaurantName}
              onOrderAccepted={(orderId) => {
                setOrders((prevOrders) =>
                  prevOrders.filter((o) => o.id !== orderId)
                );
              }}
            />
          ))
        ) : (
          <p className="text-gray-500 text-lg font-medium">
            No orders available at the moment ⏳
          </p>
        )}
      </div>
    </div>
  );
};

export default AvailableOrders;
