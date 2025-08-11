import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Check, Truck, CookingPot, CreditCard } from "lucide-react";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // We either use state (passed from OrderCard) or fetch here if needed
  const order = state?.order;

  if (!order) {
    return <p className="text-center text-gray-500 mt-10">Order details not available.</p>;
  }

  // Date formatter
  const formatDate = (iso) => {
    if (!iso) return "N/A";
    const d = new Date(iso);
    return d.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  // Status config
  const statusStyles = {
    preparing: "bg-blue-100 text-blue-800",
    on_the_way: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    ordered: "bg-gray-100 text-gray-800"
  };

  const statusIcons = {
    preparing: CookingPot,
    on_the_way: Truck,
    delivered: Check,
    ordered: Clock
  };

  const statusKey = order?.orderstatus?.toLowerCase() || "ordered";
  const StatusIcon = statusIcons[statusKey] || Clock;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition mb-6"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      {/* Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Order #{order.id}
          </h1>
          <div
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium capitalize ${statusStyles[statusKey]}`}
          >
            <StatusIcon className="w-4 h-4" />
            {order.orderstatus.replace(/_/g, " ")}
          </div>
        </div>

        {/* Order Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4 text-gray-500" />
            <span>Order Time: {formatDate(order.order_date_time)}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Truck className="w-4 h-4 text-gray-500" />
            <span>Delivery Time: {formatDate(order.delivery_date_time)}</span>
          </div>
        </div>

        {/* Customer Info */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Customer</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="font-medium">{order.user.firstName} {order.user.lastName}</p>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <Phone className="w-4 h-4" /> {order.user.phone}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <Mail className="w-4 h-4" /> {order.user.email}
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600 mt-1">
            <MapPin className="w-4 h-4 mt-1" /> 
            {order.user.address.addressLine1}, {order.user.address.addressLine2}, 
            {order.user.address.city}, {order.user.address.state}, {order.user.address.country} - {order.user.address.pinCode}
          </div>
        </div>

        {/* Payment & Amounts */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Payment</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex items-center gap-2 text-gray-700 mb-2">
            <CreditCard className="w-4 h-4" /> {order.payment_method}
          </div>
          <div className="space-y-1 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>₹{order.tax_amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{order.delivery_fee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>- ₹{order.discount_amount.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-gray-900">
              <span>Total</span>
              <span>₹{order.total_amount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* In Future: Items List Section */}
        {/* Example: 
          <h2>Items</h2>
          {order.items.map(...)}
        */}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
