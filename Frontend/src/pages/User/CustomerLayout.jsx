import { Outlet } from "react-router-dom"
import Navbar from "../../components/user/Navbar"

const CustomerLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default CustomerLayout
