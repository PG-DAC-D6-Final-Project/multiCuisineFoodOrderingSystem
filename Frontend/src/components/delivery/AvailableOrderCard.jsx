import { toast } from "react-toastify";
import { acceptOrder } from "../../services/deliveryAgentService";
import { Button } from "../ui/button";

const AvailableOrderCard = ({
  id,
  customerAddress,
  restaurantAddress,
  onOrderAccepted,
  restaurantName,
}) => {
  const handleAcceptOrder = async (orderId) => {
    try {
      const deliveryAgentId = sessionStorage.getItem("deliveryId");
      const result = await acceptOrder(orderId, deliveryAgentId);
      if (result.status === 200) {
        toast.success("✅ Order Accepted");
        onOrderAccepted(orderId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 flex flex-col justify-between min-h-[420px]">
      {/* Top Content */}
      <div className="flex flex-col gap-4">
        {/* Order ID */}
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg text-gray-700">Order ID:</span>
          <span className="font-bold text-blue-600">{id}</span>
        </div>

        {/* Pickup */}
        <div>
          <p className="font-semibold text-gray-700">Pickup</p>
          <p className="text-gray-600">{restaurantName}</p>
          <div className="mt-1 text-sm text-gray-500">
            <div>{restaurantAddress.addressLine1}</div>
            <div>{restaurantAddress.addressLine2}</div>
            <div>
              {restaurantAddress.city}, {restaurantAddress.state}
            </div>
            <div>
              {restaurantAddress.country} - {restaurantAddress.pinCode}
            </div>
          </div>
        </div>

        {/* Drop */}
        <div>
          <p className="font-semibold text-gray-700">Drop</p>
          <div className="mt-1 text-sm text-gray-500">
            <div>{customerAddress.addressLine1}</div>
            <div>{customerAddress.addressLine2}</div>
            <div>
              {customerAddress.city}, {customerAddress.state}
            </div>
            <div>
              {customerAddress.country} - {customerAddress.pinCode}
            </div>
          </div>
        </div>

        {/* Payout */}
        <div className="flex justify-between items-center border-t pt-3">
          <span className="font-semibold text-gray-700">Payout</span>
          <span className="text-green-600 font-bold">{"\u20b9"}50</span>
        </div>
      </div>

      {/* Button pinned at bottom */}
      <div className="mt-4">
        <Button
          onClick={() => handleAcceptOrder(id)}
          className="w-full bg-green-500 text-white hover:bg-green-600 rounded-lg py-2 font-semibold transition-colors"
        >
          Accept Order
        </Button>
      </div>
    </div>
  );
};

export default AvailableOrderCard;
