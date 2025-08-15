import { useParams, useNavigate , useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import {
  ArrowLeft,
  MapPin,
  Phone,
  Star,
  Clock,
  PackageCheck,
} from "lucide-react";

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/restaurant/${id}`);
        setRestaurant(res.data);
      } catch (err) {
        toast.error("Failed to fetch restaurant details");
      }
    };
    fetchRestaurant();
  }, [id]);

  if (!restaurant) {
    return <p className="text-center mt-10 text-gray-500">Loading restaurant details...</p>;
  }

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
        {/* Header with Image */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center border-b border-gray-200 pb-4 mb-4">
          <img
            src={restaurant.image_url}
            alt={restaurant.name}
            className="w-40 h-40 object-cover rounded-lg shadow"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold text-gray-800">{restaurant.name}</h1>
            <span
              className={`px-3 py-1 w-fit rounded-full text-sm font-medium ${
                restaurant.status === "ACTIVE"
                  ? "bg-green-100 text-green-600"
                  : restaurant.status === "INACTIVE"
                  ? "bg-gray-200 text-gray-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {restaurant.status}
            </span>
            <p className="text-gray-500">Total Revenue: ₹{state.revenue}</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-500 mt-1" />
            <p className="text-gray-600">
              {restaurant.address?.addressLine1 && restaurant.address?.addressLine1 + ", "}
              {restaurant.address?.addressLine2 && restaurant.address?.addressLine2 + ", "}
              {restaurant.address?.city}, {restaurant.address?.state}, {restaurant.address?.country} - {restaurant.address?.pinCode}
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">{restaurant.phone}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-700 font-medium">{restaurant.avg_rating || "N/A"}</span>
          </div>

          {/* Opening / Closing Time */}
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-purple-500" />
            <span className="text-gray-600">
              {restaurant.openingTime && restaurant.closingTime
                ? `${restaurant.openingTime} - ${restaurant.closingTime}`
                : "Timings not available"}
            </span>
          </div>

          {/* Orders Placeholder */}
          <div className="flex items-center gap-3 sm:col-span-2">
            <PackageCheck className="w-5 h-5 text-green-600" />
            <span className="text-gray-600">Total Orders : {state.orderCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailsPage;
