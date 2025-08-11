
import { Search} from "lucide-react"
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AllRestaurantList = (props)=>{

    const [restaurants, setRestaurants ] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const [searchStatus, setSearchStatus] = useState('');

    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const status = ['Active', 'Inactive', 'Suspended'];

    
  useEffect(()=>{
    const fetchRestaurants = async()=>{
        try{
        const response = await axios.get("http://localhost:8080/restaurant/getAllRestaurants");
        console.log(response.data);
        setRestaurants(response.data);

    }catch(err){
        toast.error("Failed to fetch restaurants");
    }
    }
    fetchRestaurants();
  },[]);

  useEffect(()=>{
    props.restaurantCount(restaurants.length);
  
    console.log("filter restaurants counts");
    props.activeRestaurantCount(restaurants.filter((restaurant)=>restaurant.status == 'ACTIVE').length);
    props.pendindRestaurantCount(restaurants.filter((restaurant)=>restaurant.status == 'PENDING').length);
  
  },[restaurants])


  // filter restaurants

  const filterRestaurants = restaurants.filter((restaurant)=>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (searchStatus === "" || restaurant.status.toLowerCase() === searchStatus.toLowerCase())
  );
  
    return (
        <>
        <div className="flex item-center justify-evenly">
            <div className="search-bar flex items-center gap-2 border-gray-300 border-1 rounded-md p-1 ">
                <Search className="w-4 h-4 text-gray-500"/>
                <input className="outline-none "type="text" placeholder="Search Restaurants"
                onChange={(e)=>setSearchTerm(e.target.value)} />
            </div>
            <div className="border border-gray-300 rounded-md p-1">
                <select className="outline-none bg-transparent w-full"
                onChange={(e)=>setSearchStatus(e.target.value)}
                value={searchStatus}>
                    <option value="">All Status</option>
                    {status.map((status,index)=>{
                        return (
                            <option value={status} key={index}>{status}</option>
                        )
                    })}
                </select>
            </div>

           
            
        </div>

        {filterRestaurants.length ===0 ? (
            <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-xl font-semibold text-gray-700">No Restaurants Found</h1>
            <p className="text-gray-500 mt-1">Try adjusting your search or filters</p>
            </div>
        ):(
            <div>
            {filterRestaurants.map((restaurant)=>{
                return (
                    <RestaurantCard restaurant={restaurant} reloadList={setRestaurants} key={restaurant.id} />
                )
            })}
                
        </div>
        )}
        
        
        </>
    )
}

export default AllRestaurantList