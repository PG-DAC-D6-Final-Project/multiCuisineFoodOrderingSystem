import { useState} from "react";
import { TrendingUp, Store, ShoppingCart, Truck } from "lucide-react";
const Nav = ({activeTab,setActiveTab})=>{
    
    const NavLinks =[
            { id: 'dashboard', label: 'Dashboard', icon: TrendingUp},
            { id: 'restaurants', label: 'Restaurants', icon: Store},
            { id: 'orders', label: 'Orders', icon: ShoppingCart},
            { id: 'delivery', label: 'Delivery', icon: Truck}
        ]

    return (
        <>
        {/* Admin Nav Bar */}
           {/* Admin Nav Bar */}
            <div className="admin-nav flex item-center justify-items-start gap-6 bg-white p-4 ">
                {NavLinks.map((tab)=>{
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={()=> setActiveTab(tab.id)}
                          className={`flex items-center justify-center gap-2 py-4 px-1 border-b-2 font-medium text-sm w-26  ${
                            activeTab == tab.id
                            ? 'border-blue-500 text-blue-500'
                            :'border-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        >
                            <Icon className='w-4 h-4'/>
                            {tab.label}
                        </button>

                    )
                })}
                
            </div>
        </>  
    )
}
export default Nav