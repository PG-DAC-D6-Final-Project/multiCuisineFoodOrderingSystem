import React, { useEffect, useState } from "react";
import { Clock, Eye, Check, X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../utils/config";

const PendingRestaurantRequests = () => {
  const [pendingRestaurants, setPendingRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch from API
  useEffect(() => {
    const fetchPendingRestaurants = async () => {
      try {
        const res = await axios.get(baseUrl + "/restaurant/getAllPendingRestaurant");
        setPendingRestaurants(res.data || []);
      } catch (error) {
        console.error("Error fetching pending restaurants:", error);
        toast.error("Failed to load pending restaurant requests");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingRestaurants();
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
        <Clock className="w-5 h-5 text-yellow-500" /> Pending Restaurant Requests
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : pendingRestaurants.length === 0 ? (
        <p className="text-gray-500">No pending restaurant requests.</p>
      ) : (
        pendingRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex justify-between items-center border p-4 mb-3 rounded-lg"
          >
            {/* Left: Image + Info */}
            <div className="flex items-center gap-4">
              <img
                src={restaurant.image_url}
                alt={restaurant.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-md font-semibold">{restaurant.name}</h3>
                <p className="text-sm text-gray-500">
                  {restaurant.address?.city}, {restaurant.address?.state}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Phone: {restaurant.phone}
                </p>
              </div>
            </div>

            {/* Middle: Rating */}
            <div className="flex items-center gap-6">
              <div className="text-yellow-600 font-medium text-sm">
                ⭐ {restaurant.avg_rating || 0}
              </div>
              <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 border border-yellow-300">
                {restaurant.status}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200">
                <Eye className="w-5 h-5 text-blue-600" />
              </button>
              <button className="p-2 rounded-full bg-green-100 hover:bg-green-200">
                <Check className="w-5 h-5 text-green-600" />
              </button>
              <button className="p-2 rounded-full bg-red-100 hover:bg-red-200">
                <X className="w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PendingRestaurantRequests;
