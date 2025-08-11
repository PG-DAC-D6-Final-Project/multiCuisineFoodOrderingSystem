import { Store , Bell, CheckCircle2, Pen } from "lucide-react"
import { useState } from "react"
import AllRestaurantList from "./AllRestaurantsList";
import PendingRestaurantRequests from "./PendingRestaurantRequests";
const RestaurantsView =() =>{

    const [allRestaurantsActive, setAllRestaurantsActive] = useState(true);
    const [restaurantCount, setRestaurantCount] = useState(0);
    const [pendingRestaurantCount, setPendingRestaurantCount] = useState(2);
    const [activeRestaurantCount, setActiveRestaurantCount] = useState(0);
    return (
        <>
            <div>
                <div  className="flex item-center justify-center gap-20 mb-3">
                    <div className="bg-white p-4 flex flex-col items-center ">
                        <Store className="w-7 h-7 text-blue-500"/>
                        <h2 className="text-gray-700">Total Restaurants</h2>
                        <h1 className="font-bold text-2xl">{restaurantCount}</h1>
                    </div>
                

{/*  */}
                <div className="bg-white p-4 flex flex-col items-center ">
                        <Bell className="w-7 h-7 text-yellow-500"/>
                        <h2 className="text-gray-700">Pending Requests</h2>
                        <h1 className="font-bold text-2xl">{pendingRestaurantCount}</h1>
                    </div>
                
{/*  */}

        <div className="bg-white p-4 flex flex-col items-center border-gray-300 border-1 rounded-lg">
                        <CheckCircle2 className="w-7 h-7 text-green-500"/>
                        <h2 className="text-gray-700">Active Restaurant</h2>
                        <h1 className="font-bold text-2xl">{activeRestaurantCount}</h1>
                    </div>
                



                </div>

                <div className="flex items-center justify-center gap-2 text-md w-1/2 bg-gray-200 py-1 px-1 rounded-md">
                    <div 
                    onClick={()=>{setAllRestaurantsActive(true)}}
                    className={`w-1/2 p-1 text-center rounded-md ${allRestaurantsActive == true ? 'text-blue-500 bg-white':'text-gray-600'}`}>All Restaurants ({restaurantCount})</div>
                    <div
                    onClick={()=>{setAllRestaurantsActive(false)}}
                    className={`w-1/2 p-1 text-center rounded-md ${allRestaurantsActive == false ? 'text-blue-500 bg-white':'text-gray-600'}`}>Pending Requests ({pendingRestaurantCount})</div>
                </div>

                <div>
                    {allRestaurantsActive ? <AllRestaurantList restaurantCount={setRestaurantCount} activeRestaurantCount={setActiveRestaurantCount} pendindRestaurantCount={setPendingRestaurantCount}/>:<PendingRestaurantRequests/>}
                </div>
                
            </div>
        </>
    )
}
export default RestaurantsView;