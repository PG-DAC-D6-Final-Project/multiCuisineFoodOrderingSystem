import {TrendingUp,Users ,Store,DollarSign,ShoppingCart, } from "lucide-react";
import React from "react";
import OrderGraph from "./OrderChart";
import CategoryDistributionChart from "./CategoryDistributionChart";
const DashboardView = ()=>{
    return (
        <>
            <div>
            <div className='flex items-center justify-evenly gap-2 mb-4'>
                <div className="total-users bg-white p-4 flex flex-col items-center justify-center border border-gray-200
                rounded-lg">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                         <Users className="w-6 h-6 text-blue-600"/>
                    </div>
                   
                    <h3>Total Users</h3>
                    <h1 className="text-2xl font-bold">12,580</h1>
                        <div className="flex items-center justify-center gap-1 text-green-700 ">
                            
                            <TrendingUp className="w-4 h-4"/>+12% from last month
                            
                        </div>
                </div>

                {/*  */}

                <div className="total-users bg-white p-4 flex flex-col items-center justify-center border border-gray-200
                rounded-lg">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                         <Store className="w-6 h-6 text-green-600"/>
                    </div>
                   
                    <h3>Total Restaurants</h3>
                    <h1 className="text-2xl font-bold">245</h1>
                        <div className="flex items-center justify-center gap-1 text-green-700 ">
                            
                            <TrendingUp className="w-4 h-4"/>+8% from last month
                            
                        </div>
                </div>

                {/*  */}

                <div className="total-users bg-white p-4 flex flex-col items-center justify-center border border-gray-200
                rounded-lg">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                         <ShoppingCart className="w-6 h-6 text-purple-600"/>
                    </div>
                   
                    <h3>Total Orders</h3>
                    <h1 className="text-2xl font-bold">8,945</h1>
                        <div className="flex items-center justify-center gap-1 text-red-700 ">
                            
                            <TrendingUp className="w-4 h-4"/>-3% from last month
                            
                        </div>
                </div>

                {/*  */}

                <div className="total-users bg-white p-4 flex flex-col items-center justify-center border border-gray-200
                rounded-lg">
                    <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center">
                         <DollarSign className="w-6 h-6 text-yellow-600"/>
                    </div>
                   
                    <h3>Total Revenue</h3>
                    <h1 className="text-2xl font-bold">$1,25,480</h1>
                        <div className="flex items-center justify-center gap-1 text-green-700 ">
                            
                            <TrendingUp className="w-4 h-4"/>+15% from last month
                            
                        </div>
                </div>

                
            </div>
            </div>
            <div>
                <div className="w-full flex items-center justify-center gap-1">
                     <OrderGraph/>
                     <CategoryDistributionChart/>
                </div>
            </div>
        </>
    )
}
export default DashboardView