import React from 'react';
import { Link } from 'react-router-dom';
import restaurantImage from '../../assets/resources/restaurant-signup.jpg';
import deliveryImage from '../../assets/resources/delivery-signup.jpg';    

const JoinUsOptions = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Partner with ZomatoLite
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Restaurant Signup */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src={restaurantImage}
            alt="Restaurant Signup"
            className="h-60 w-full object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              List your restaurant with us
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Reach thousands of customers and grow your business with ZomatoLite.
            </p>
            <Link to="/restaurant/Register">
              <button className="bg-orange-500 px-5 py-2 rounded hover:bg-orange-600 text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Delivery Partner Signup */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src={deliveryImage}
            alt="Delivery Partner Signup"
            className="h-60 w-full object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Become our delivery partner
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Join our team and earn by delivering happiness to people's doorsteps.
            </p>
            <Link to="/delivery">
              <button className="bg-orange-500 px-5 py-2 rounded hover:bg-orange-600 text-white">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsOptions;
