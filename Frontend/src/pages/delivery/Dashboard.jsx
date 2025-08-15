import { useState } from "react"
import { Switch } from "../../components/ui/switch"
import DashboardCard from "../../components/delivery/DashboardCard";
import { BsCurrencyRupee } from "react-icons/bs"
import { FaBoxOpen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { toast } from "react-toastify";
import { Link, Navigate } from "react-router-dom";


const Dashboard = () => {
  const [isOnline, setIsOnline] = useState(true);

  const onlineStateHandler = (event) => {
    setIsOnline(!isOnline)
  }

  if (sessionStorage.getItem("role") != "DELIVERY_AGENT") {
    return <Navigate to="/delivery/login" />
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Delivery Dashboard</h1>
      <h3 className="text-md text-center mt-4">Welcome Agent</h3>
      <div className="text-lg mt-2 flex justify-center items-center">You are {isOnline ? "Online" : "Offline"}. <Switch checked={isOnline} onCheckedChange={onlineStateHandler} className="data-[state=checked]:bg-green-500  data-[state=unchecked]:bg-red-500 ml-2" /> </div>

      <div className="my-10 px-10 flex justify-around items-center gap-10">
        <DashboardCard icon={<BsCurrencyRupee color="green" size={40} className="mt-6" />} title="Total Earnings" description={<div className="text-2xl font-bold mb-6 text-green-700">{`\u20B9599`}</div>} />
        <DashboardCard icon={<FaBoxOpen color="orangered" size={40} className="mt-6" />} title="Deliveries Completed" description={<div className="text-2xl font-bold mb-6 text-orange-600">2</div>} />
        <DashboardCard icon={<FaStar color="gold" size={40} className="mt-6" />} title="Average Rating" description={<div className="text-2xl font-bold mb-6 text-yellow-500">4.8</div>} />
      </div>
      <div>
        <div className="h-32 border rounded-xl mb-10 shadow-2xl p-2">
          <div className="text-2xl font-medium text-center">Quick Actions</div>
          <div className="flex justify-around items-center p-4">
            <Button variant="outline" className="cursor-pointer hover:bg-orange-100"><Link to="/delivery/available">View New Orders</Link></Button>
            <Button variant="outline" className="cursor-pointer hover:bg-orange-100"><Link to="/delivery/active">Check Active Deliveries</Link></Button>
            <Button variant="outline" className="cursor-pointer hover:bg-orange-100"><Link to="/delivery/history">View History</Link></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
