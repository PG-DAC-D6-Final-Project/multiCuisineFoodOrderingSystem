import React, { useState, useEffect } from "react";
import DeliveryAgentCard from "../admin/DeliveryAgentCard";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../utils/config";

const DeliveryManagement = () => {
  const [agents, setAgents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await axios.get(baseUrl+"/delivery"); // change to your API
        setAgents(res.data);
      } catch (err) {
        toast.error("Failed to fetch delivery agents");
      }
    };
    fetchAgents();
  }, []);

  // Filter agents by search term (first name, last name, email, phone)
  const filteredAgents = agents.filter((agent) => {
    const term = searchTerm.toLowerCase();
    return (
      agent.firstName?.toLowerCase().includes(term) ||
      agent.lastName?.toLowerCase().includes(term) ||
      agent.email?.toLowerCase().includes(term) ||
      agent.phone?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-gray-800">Delivery Management</h2>
      <p className="text-sm text-gray-500 mb-4">
        Track and manage your delivery agents in real-time
      </p>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search delivery agents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-1/3"
        />
      </div>

      {/* Agent Cards */}
      {filteredAgents.length > 0 ? (
        filteredAgents.map((agent, idx) => (
          <DeliveryAgentCard key={idx} agent={agent} />
        ))
      ) : (
        <p className="text-center text-gray-500">No agents found</p>
      )}
    </div>
  );
};

export default DeliveryManagement;
