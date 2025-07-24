import React from "react";
import restaurant1 from "../assets/resources/restaurant1.png";
import restaurant2 from "../assets/resources/restaurant2.png";
import restaurant3 from "../assets/resources/restaurant3.png";
import restaurant4 from "../assets/resources/restaurant4.png";
import { Link } from "react-router-dom";

const restaurants = [
  { name: "Spicy Bites", rating: 4.5, img: restaurant1 },
  { name: "Urban Tandoor", rating: 4.2, img: restaurant2 },
  { name: "Pasta Palace", rating: 4.0, img: restaurant3 },
  { name: "Sushi World", rating: 4.3, img: restaurant4 },
];

const DiscoverRestaurants = () => {
  return (
    <div className="h-[80vh] px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Discover Restaurants
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition"
          >
            <img
              src={restaurant.img}
              alt={restaurant.name}
              className="h-40 w-full object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{restaurant.name}</h3>
            <p className="text-yellow-500 font-medium">
              ⭐ {restaurant.rating}
            </p>
            <button className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
              View Dishes
            </button>
          </div>
        ))}
      </div>{" "}
      <br />
      <div className="flex justify-center mt-4">
        <Link to="/viewAllRestaurants">
          <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-white">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverRestaurants;
