const OrderHistoryCard = ({
  id,
  customerAddress,
  restaurantAddress,
  restaurantName,
}) => {
  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 flex flex-col gap-4">
      {/* Order ID */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg text-gray-700">Order ID:</span>
        <span className="font-bold text-blue-600">{id}</span>
      </div>

      {/* Status */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">Status:</span>
        <span className="text-green-700 font-bold">✅ DELIVERED</span>
      </div>

      {/* Delivered From */}
      <div>
        <p className="font-semibold text-md text-gray-700">Delivered From</p>
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

      {/* Delivered To */}
      <div>
        <p className="font-semibold text-md text-gray-700">Delivered To</p>
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

      {/* Earnings */}
      <div className="flex justify-between items-center border-t pt-3">
        <span className="font-semibold text-gray-700">Earned</span>
        <span className="text-green-600 font-bold">{"\u20b9"}50</span>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
