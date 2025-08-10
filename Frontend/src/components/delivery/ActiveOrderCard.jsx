import { toast } from "react-toastify";
import { deliverOrder } from "../../services/deliveryAgentService";
import { Button } from "../ui/button";

const ActiveOrderCard = ({
  id,
  customerAddress,
  restaurantAddress,
  customerName,
  restaurantName,
  onOrderDelivered,
}) => {
  const handleDeliverOrder = async () => {
    try {
      const result = await deliverOrder(id);
      if (result.status === 200) {
        toast.success("Order Accepted");
        onOrderDelivered(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 flex flex-col gap-4">
      {/* Order ID */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg text-gray-700">
          Order ID:
        </span>
        <span className="font-bold text-blue-600">{id}</span>
      </div>

      {/* Restaurant Info */}
      <div>
        <p className="font-semibold text-md text-gray-700">Restaurant</p>
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

      {/* Customer Info */}
      <div>
        <p className="font-semibold text-md text-gray-700">Customer</p>
        <p className="text-gray-600">{customerName}</p>
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

      {/* Estimated Payout */}
      <div className="flex justify-between items-center border-t pt-3">
        <span className="font-semibold text-gray-700">Estimated Payout</span>
        <span className="text-green-600 font-bold">{"\u20b9"}50</span>
      </div>

      {/* Action Button */}
      <div className="flex justify-end mt-3">
        <Button
          onClick={handleDeliverOrder}
          variant="outline"
          className="cursor-pointer px-6 py-2 border-green-500 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md"
        >
          ✅ Mark as Delivered
        </Button>
      </div>
    </div>
  );
};

export default ActiveOrderCard;
