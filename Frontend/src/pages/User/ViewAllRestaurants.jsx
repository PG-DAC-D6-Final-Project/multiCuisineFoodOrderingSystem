import React from "react";
import restaurant1 from "../../assets/resources/restaurant1.png";
import restaurant2 from "../../assets/resources/restaurant2.png";
import restaurant3 from "../../assets/resources/restaurant3.png";
import restaurant4 from "../../assets/resources/restaurant4.png";

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
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-orange-600">
        All Restaurants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {restaurants.map((res) => (
          <div
            key={res.id}
            className="rounded-lg shadow-md bg-white p-4 text-center"
          >
            <img
              src={res.image}
              alt={res.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-medium">{res.name}</h3>
            <p className="text-sm text-gray-600 mb-2">Rating: ⭐ {res.rating}</p>
            <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 text-sm">
              View Dishes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllRestaurants;
