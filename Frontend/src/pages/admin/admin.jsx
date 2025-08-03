
import { ShoppingCart, Store, TrendingUp, Truck } from "lucide-react"
import { useState} from "react"

import Header from "../../components/admin/Header"
import DashboardView from "../../components/admin/DashboardView"
import RestaurantsView from "../../components/admin/RestaurantsView"    
import OrdersView from "../../components/admin/OrdersView"
import DeliveryManagement from "../../components/admin/DeliveryView"
import Nav from "../../components/admin/Nav"

const Admin =()=>{
    const [activeTab, setActiveTab] = useState('dashboard');
    
    return(
        <>
            <div className=" bg-gray-100">
            <Header/>
            {/* Admin Nav Bar */}
            <Nav activeTab={activeTab} setActiveTab={setActiveTab}/>
            {/* Main Dashboard View */}
            <div>
                <div className="p-4">
                    {activeTab == 'dashboard' && <DashboardView/>}
                    {activeTab == 'restaurants' && <RestaurantsView/>}
                    {activeTab == 'orders' && <OrdersView/>}
                    {activeTab == 'delivery' && <DeliveryManagement/>}
                </div>
            </div>
            </div>
           
        </>
    )
}

export default Admin