import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Landing from '../../components/Landing'
import Cuisines from '../../components/Cuisines'
import DiscoverRestaurants from '../../components/DiscoverRestaurants'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white shadow px-6 py-4">
        <div className="text-xl font-bold text-red-500">ZomatoLite</div>

        <div className="flex gap-4">
          <Link to="/cart">
            <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
              View Cart
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Login
            </button>
          </Link>
          <Link to="/profile">
            <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
              Profile
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        <Landing />
        <Cuisines />
        <DiscoverRestaurants />
      </div>

      <Footer />


    </div>
  )
}

export default Home
