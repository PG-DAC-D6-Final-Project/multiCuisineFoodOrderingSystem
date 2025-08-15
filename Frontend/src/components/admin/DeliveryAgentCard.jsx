import React from "react";
import { Phone, Mail, Car, IdCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DeliveryAgentCard = ({ agent }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow hover:shadow-md transition p-5 mb-4">
      {/* Agent Name & Vehicle */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-800 text-lg">
          {agent.firstName} {agent.lastName}
        </h2>
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
          {agent.vehicleType}
        </span>
      </div>

      {/* Contact Info */}
      <div className="mt-2 text-sm text-gray-700 space-y-1">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" /> {agent.email}
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-500" /> {agent.phone}
        </div>
      </div>

      {/* Vehicle & License Info */}
      <div className="mt-2 text-sm text-gray-700 space-y-1">
        <div className="flex items-center gap-2">
          <Car className="w-4 h-4 text-gray-500" /> {agent.vehicleNumber}
        </div>
        <div className="flex items-center gap-2">
          <IdCard className="w-4 h-4 text-gray-500" /> License: {agent.licenseNumber}
        </div>
      </div>

      {/* Action Button */}
      <div className="text-right mt-4">
        <button
          onClick={() => navigate(`/admin/delivery-agents/${agent.id}`, { state: { agent } })}
          className="px-4 py-1 bg-orange-500 text-white text-sm rounded-md hover:bg-orange-600 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default DeliveryAgentCard;
