import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div>
      <div className="flex f-screen h-full">
          <div
            className={`bg-gray-800 text-white w-64 p-4 space-y-4 transition-all duration-300 ${
            isSidebarOpen ? "block" : "hidden md:block"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Restaurant Name</h2>
            <ul className="space-y-2">
              <li className='hover:bg-gray-700 p-2 rounded cursor-pointer'>
            <Link to={'/restaurant/Dashboard'}><div>🏠 Home</div></Link>
          </li>
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                <Link to={'/restaurant/EditItem'}><div>🧾 Edit Menu Items</div></Link>
              </li>
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                <Link to={'/restaurant/EditProfile'}><div>👤 Edit Profile</div></Link>
              </li>
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                <Link to={'/restaurant/Orders'}><div>📦 View Orders</div></Link>
              </li>
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                <Link to={'/restaurant/AddItem'}><div>🍽️ Add Menu item</div></Link>
              </li>
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                <Link to={'/restaurant/DeleteItem'}><div>🍽️ Delete Menu item</div></Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Nav
