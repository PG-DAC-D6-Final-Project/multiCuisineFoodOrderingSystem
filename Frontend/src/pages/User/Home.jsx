import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Cuisines from '../../components/user/Cuisines'
import DiscoverRestaurants from '../../components/user/DiscoverRestaurants'
import Footer from '../../components/user/Footer'
import StaticHomepageDesign from '../../components/user/StaticHomepageDesign'
import JoinUsOptions from '../../components/user/JoinUsOptions'
const Home = () => {
  return (
    <div>
      {/* Navbar */} 
      <nav className="flex justify-between items-center bg-orange-600 shadow px-6 py-4">
        <div className="text-xl font-bold text-amber-50">ZomatoLite</div>

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

      {/* <div className='flex justify-center'>
        <button type="button" class="focus:outline-none text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">List your restaurant</button>
        <button type="button" class="focus:outline-none text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Become our delivery partner</button>
      </div> */}

      {/* Main Content */}
      <div>
        
        <Cuisines />
        <StaticHomepageDesign />
        <DiscoverRestaurants />
        <JoinUsOptions />        
        
      </div>

      <Footer />


    </div>
  )
}

export default Home
