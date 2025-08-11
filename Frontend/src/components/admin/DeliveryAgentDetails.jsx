import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, Car, IdCard, MapPin } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const DeliveryAgentDetailsPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Get from location.state if available
  const [agent, setAgent] = useState(state?.agent || null);
  const [loading, setLoading] = useState(!state?.agent);

  // Fetch from API if no agent in state (reload/direct)
  useEffect(() => {
    if (!agent) {
      const fetchAgent = async () => {
        try {
          const res = await axios.get(`http://localhost:8080/delivery-agents/${id}`);
          setAgent(res.data);
        } catch (err) {
          console.error(err);
          toast.error("Failed to fetch delivery agent details");
        } finally {
          setLoading(false);
        }
      };
      fetchAgent();
    }
  }, [id, agent]);

  if (loading) {
    return <p className="text-center mt-6 text-gray-500">Loading agent details...</p>;
  }

  if (!agent) {
    return <p className="text-center mt-6 text-red-500">Agent not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      {/* Details Card */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        {/* Name + Vehicle Type */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            {agent.firstName} {agent.lastName}
          </h1>
          <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
            {agent.vehicleType}
          </span>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> {agent.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> {agent.phone}
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4" /> Vehicle No: {agent.vehicleNumber}
          </div>
          <div className="flex items-center gap-2">
            <IdCard className="w-4 h-4" /> License: {agent.licenseNumber}
          </div>
          {agent.area && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Area: {agent.area}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryAgentDetailsPage;
