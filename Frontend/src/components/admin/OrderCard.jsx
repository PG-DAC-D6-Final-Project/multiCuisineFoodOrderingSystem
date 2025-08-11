import { Clock, Check, Truck, CookingPot } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  // Fallback safe date formatter
  const formatDate = (iso) => {
    if (!iso) return "Date not available";
    const d = new Date(iso);
    if (isNaN(d)) return iso; // invalid date, show as-is
    return d.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // normalize and check status
  const status = order?.orderstatus?.toLowerCase() || "unknown";

  // badge color classes
  const statusStyles = {
    preparing: "bg-blue-100 text-blue-800",
    on_the_way: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    ordered: "bg-gray-100 text-gray-800",
    unknown: "bg-gray-100 text-gray-600",
  };

  // icons for each status
  const statusIcons = {
    preparing: CookingPot,
    on_the_way: Truck,
    delivered: Check,
    ordered: Clock,
    unknown: Clock,
  };

  const StatusIcon = statusIcons[status] || Clock;

  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow hover:shadow-md transition p-5 mb-4 flex justify-between items-center">
      {/* LEFT -- Order Info */}
      <div>
        <h2 className="font-semibold text-gray-800 text-sm mb-1">
          Order ID: {order?.id || "N/A"}
        </h2>
        <p className="text-sm text-gray-700">
          {(order?.user?.firstName || "") + " " + (order?.user?.lastName || "")}
        </p>
        <p className="text-xs text-gray-500">{formatDate(order?.orderTime)}</p>

        <p className="text-sm text-gray-700 mt-2">
          {order?.restaurant?.name} •{" "}
          {order?.restaurant?.address?.city + " , " + order?.restaurant?.address?.state}
        </p>

        <p className="font-bold mt-1 text-md text-gray-900">
          ₹ {order?.total_amount ?? "0.00"}
        </p>
      </div>

      {/* RIGHT -- Status & Actions */}
      <div className="flex flex-col items-end">
        {/* Status badge */}
        <div
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm mb-8 capitalize ${statusStyles[status]}`}
        >
          <StatusIcon className="w-4 h-4" />
          <span>{status.replace(/_/g, " ")}</span>
        </div>

        
        <button
          onClick={() => navigate(`/admin/orders/${order?.id}`, { state: { order } })}
          className="px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-md transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
