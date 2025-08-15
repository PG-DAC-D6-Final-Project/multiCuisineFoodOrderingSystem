import { useEffect, useState } from "react";
import OrderHistoryCard from "../../components/delivery/OrderHistoryCard";
import { getOrderHistory } from "../../services/deliveryAgentService";
import { Navigate } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const deliveryAgentId = sessionStorage.getItem("deliveryId");

  useEffect(() => {
    const loadOrderHistory = async () => {
      try {
        const result = await getOrderHistory(deliveryAgentId);
        console.log(result);

        if (result.status === 200) {
          setOrders(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadOrderHistory();
  }, [deliveryAgentId]);

  if (sessionStorage.getItem("role") != "DELIVERY_AGENT") {
    return <Navigate to="/delivery/login" />
  }

  return (
    <div className="px-4 py-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        Order History
      </h1>

      <div className="flex flex-col justify-center items-center gap-6 my-10 w-full">
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <OrderHistoryCard
              key={index}
              id={item.id}
              customerAddress={item.customerAddress}
              restaurantAddress={item.restaurantAddress}
              customerName={item.customerName}
              restaurantName={item.restaurantName}
            />
          ))
        ) : (
          <p className="text-gray-500 text-lg font-medium">
            No past orders found 📦
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
