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
        const res = await axios.get(baseUrl+"/restaurant/getAllPendingRestaurant"); 
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
        pendingRestaurants.map((restaurant, index) => (
          <div
            key={restaurant.id || index}
            className="flex justify-between items-center border p-4 mb-3 rounded-lg"
          >
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                {restaurant.name?.[0]}
              </div>
              <div>
                <h3 className="text-md font-semibold">{restaurant.name}</h3>
                <p className="text-sm text-gray-500">
                  {restaurant.cuisine || "Cuisine N/A"} · {restaurant.owner || "Owner N/A"}
                </p>
                {restaurant.joinedDate && (
                  <p className="text-xs text-gray-400 mt-1">
                    Joined {restaurant.joinedDate}
                  </p>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div className="text-yellow-600 font-medium text-sm">
                ⭐ {restaurant.rating || 0}
              </div>
              <div className="text-blue-600 text-sm flex items-center gap-1">
                🛒 {restaurant.orders || 0}
              </div>
              <div className="text-green-600 text-sm">
                ${restaurant.revenue?.toLocaleString() || 0}
              </div>
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
