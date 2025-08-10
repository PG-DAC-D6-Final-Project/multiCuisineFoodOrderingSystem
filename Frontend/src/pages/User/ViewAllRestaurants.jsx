import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import restaurant0 from "../../assets/resources/restaurant1.png";
import restaurant1 from "../../assets/resources/restaurant2.png";
import restaurant2 from "../../assets/resources/restaurant3.png";
import restaurant3 from "../../assets/resources/restaurant4.png";
import axios from "axios";

const restaurantsImages = [restaurant0, restaurant1, restaurant2, restaurant3];

const ViewAllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await axios.get("http://localhost:8080/restaurant/");
        setRestaurants(response.data);
      } catch (err) {
        console.log(err);
        alert("Failed to fetch restaurants");
      } finally {
        setLoading(false);
      }
    };
    fetchResponse();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-50 via-white to-orange-100 px-4 py-8 pb-16">
      {/* Back Button */}
      <div className="mb-6 max-w-3xl mx-auto">
        <Link to="/">
          <button className="flex items-center gap-2 bg-orange-50 px-5 py-2 text-orange-700 rounded shadow hover:bg-orange-200 transition-all hover:scale-105 font-medium">
            <span className="text-xl">←</span>
            Back
          </button>
        </Link>
      </div>

      <h2 className="text-4xl font-bold text-center text-orange-600 mb-3 drop-shadow">
        All Restaurants
      </h2>
      <p className="text-center text-lg text-gray-500 mb-10">
        Find your favorite place to eat!
      </p>

      {(loading) ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin h-10 w-10 border-4 border-orange-500 border-t-transparent rounded-full"></div>
        </div>
      ) : restaurants.length === 0 ? (
        <div className="text-center text-xl text-gray-400 font-medium mt-20">
          Oops! No restaurants found.
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
          {restaurants.map((res, index) => (
            <div
              key={res.id}
              className="group bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <img
                src={res.image_url || restaurantsImages[index % restaurantsImages.length]}
                alt={res.name}
                className="w-full h-48 object-cover border-b border-orange-100 group-hover:scale-105 group-hover:brightness-95 transition duration-300"
              />
              <div className="flex-1 flex flex-col justify-between p-6">
                {/* Name and Rating */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-semibold text-orange-600">
                    {res.name}
                  </h3>
                  <span className="flex items-center gap-1 text-yellow-500 font-semibold text-base">
                    <span>⭐</span>
                    {res.avg_rating ? res.avg_rating : "-"}
                  </span>
                </div>

                {/* Description or fallback */}
                <p className="text-gray-500 text-sm mb-6 min-h-[40px]">
                  {res.description ? res.description : "Delicious cuisine awaits!"}
                </p>

                <Link
                  to="/customer/viewRestaurantMenuItems"
                  state={{ restaurantId: res.id, restaurantName: res.name }}
                  className="w-full"
                >
                  <button className="bg-gradient-to-r from-green-200 to-green-100 text-green-900 px-4 py-2 rounded-lg hover:bg-green-300 hover:scale-[1.03] shadow transition-all duration-200 font-semibold w-full">
                    View Dishes
                  </button>
                </Link>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-gradient-to-tr from-orange-300 to-transparent transition" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAllRestaurants;
