import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
  const userId = sessionStorage.getItem("id")
  const navigate = useNavigate()
  return (
    <>
      {userId != null && <nav className="flex justify-between items-center bg-orange-600 shadow px-6 py-4">
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
      </nav>}
    </>
  )
}

export default Navbar
