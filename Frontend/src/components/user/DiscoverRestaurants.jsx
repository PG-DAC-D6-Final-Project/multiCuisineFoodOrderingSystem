
import restaurant1 from "../../assets/resources/restaurant1.png";
import restaurant2 from "../../assets/resources/restaurant2.png";
import restaurant3 from "../../assets/resources/restaurant3.png";
import restaurant4 from "../../assets/resources/restaurant4.png";
import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";


const restaurantImages = [restaurant1, restaurant2, restaurant3, restaurant4];

const DiscoverRestaurants = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);


  useEffect(()=>{

    const fetchRestaurants = async () =>{

    try{
      const response = await fetch("http://localhost:8080/restaurant/?limit=4")

      if(!response.ok) throw new Error("Failed to fetch restaurants");

        const data = await response.json();
        console.log(data);
        setRestaurants(data);
    }
    catch(err){
      setError(err.message);
    }
  };

  fetchRestaurants();

  }, []);
  

  return (
    <div className="min-h-[80vh] px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">
        Discover Restaurants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition text-center"
          >
            <img
              src={restaurantImages[index]}
              alt={restaurant.name}
              className="h-40 w-full object-cover rounded-md mb-3"
            />

            {/* Name and Rating in same line */}
            <div className="flex justify-between items-center mb-2 px-2">
              <h3 className="text-lg font-semibold">{restaurant.name}</h3>
              
              <p className="text-yellow-500 text-sm">⭐ {restaurant.avg_rating  }</p>
            </div>

            {/* Tagline line */}
            <p className="text-green-800 text-sm mb-2 px-2 italic">
              Taste that tells a story.
            </p>

            
              <Link 
              to="/customer/viewRestaurantMenuItems"
              state={{
                restaurantId: restaurant.id
              }}
              >

            <button className="mt-2 bg-green-100 text-green-900 px-4 py-1 rounded hover:bg-green-200 text-sm w-full h-9">

                 View Dishes
              
             
            </button>

            </Link>
          </div>
        ))}
      </div>

      {/* View More button */}
      <div className="flex justify-center mt-8">
        <Link to="customer/viewAllRestaurants">
          <button className="bg-orange-500 px-5 py-2 rounded hover:bg-orange-600 text-white">
            View More Restaurants
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverRestaurants;

