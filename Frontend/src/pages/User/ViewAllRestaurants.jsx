import React from "react";
import { Link } from "react-router-dom";
import restaurant1 from "../../assets/resources/restaurant1.png";
import restaurant2 from "../../assets/resources/restaurant2.png";
import restaurant3 from "../../assets/resources/restaurant3.png";
import restaurant4 from "../../assets/resources/restaurant4.png";

// In production, this array will be populated dynamically from backend/database
const restaurants = [
  { id: 1, name: "Spicy Hub", image: restaurant1, rating: "4.5" },
  { id: 2, name: "Tandoori Treat", image: restaurant2, rating: "4.2" },
  { id: 3, name: "Urban Grill", image: restaurant3, rating: "4.7" },
  { id: 4, name: "Curry Nation", image: restaurant4, rating: "4.3" },
  { id: 5, name: "Spicy Hub", image: restaurant1, rating: "4.5" },
  { id: 6, name: "Tandoori Treat", image: restaurant2, rating: "4.2" },
  { id: 7, name: "Urban Grill", image: restaurant3, rating: "4.7" },
  { id: 8, name: "Curry Nation", image: restaurant4, rating: "4.3" },
];

const ViewAllRestaurants = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/">
          <button className="bg-gray-200 text-gray-800 px-4 py-1 rounded hover:bg-gray-300">
            ← Back
          </button>
        </Link>
      </div>

      <h2 className="text-3xl font-semibold text-center text-orange-600 mb-8">
        All Restaurants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {restaurants.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg"
          >
            <img
              src={res.image}
              alt={res.name}
              className="w-full h-40 object-cover rounded mb-3"
            />

            {/* Name and Rating in one row */}
            <div className="flex justify-between items-center px-2 mb-2">
              <h3 className="text-lg font-medium">{res.name}</h3>
              <p className="text-sm text-yellow-500">⭐ {res.rating}</p>
            </div>

            <button className="bg-green-100 text-green-900 px-4 py-1 rounded hover:bg-green-200 text-sm w-full h-9">
              View Dishes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllRestaurants;
