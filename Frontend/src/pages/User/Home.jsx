import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Cuisines from '../../components/user/Cuisines'
import DiscoverRestaurants from '../../components/user/DiscoverRestaurants'
import Footer from '../../components/user/Footer'
import StaticHomepageDesign from '../../components/user/StaticHomepageDesign'
import JoinUsOptions from '../../components/user/JoinUsOptions'
import { toast } from 'react-toastify'
const Home = () => {
  const userId = sessionStorage.getItem("id")
  const navigate = useNavigate()
  console.log(userId)
  return (
    <div>
      {/* Navbar */}
      {userId != null ? <nav className="flex justify-between items-center bg-orange-600 shadow px-6 py-4 sticky top-0 z-10">
        <div className="text-xl font-bold text-amber-50">ZomatoLite</div>

        <div className="flex gap-4">
          <Link to="/customer/cart">
            <button className="bg-gray-100 px-4 py-2 rounded hover:bg-blue-200">
              Cart
            </button>
          </Link>
          <Link to="/customer/orders">
            <button className="bg-gray-100 px-4 py-2 rounded hover:bg-blue-200">
              Orders
            </button>
          </Link>
          <Link to="/customer/profile">
            <button className="bg-gray-100 px-4 py-2 rounded hover:bg-blue-200">
              Profile
            </button>
          </Link>
          <button onClick={() => {
            toast.success("Logout successful")
            sessionStorage.clear()
            navigate("/");
          }} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
            LogOut
          </button>
        </div>
      </nav> :
        <nav className="flex justify-between items-center bg-orange-600 shadow px-6 py-4 sticky top-0 z-10">
          <div className="text-xl font-bold text-amber-50">ZomatoLite</div>

          <div className="flex gap-4">
            <Link to="/customer/register">
              <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
                Signup
              </button>
            </Link>
            <Link to="/customer/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Login
              </button>
            </Link>
          </div>
        </nav>}

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
