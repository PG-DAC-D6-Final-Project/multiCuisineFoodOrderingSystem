
import { Search} from "lucide-react"
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AllRestaurantList = (props)=>{

    const [restaurants, setRestaurants ] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const [searchStatus, setSearchStatus] = useState('');

    const status = ['Active', 'Inactive', 'Suspended'];

    const cusines = ['All Cuisines','Indian', 'Italian', 'Mexican', 'Chinese', 'American','others']; 
    
//     const restaurants = [ {
//       id: 1,
//       name: 'Pizza Palace',
//       owner: 'Mario Rossi',
//       email: 'mario@pizzapalace.com',
//       phone: '+1 234-567-8901',
//       address: '123 Main St, New York, NY',
//       cuisine: 'Italian',
//       status: 'active',
//       rating: 4.5,
//       totalOrders: 1250,
//       totalRevenue: "45,670",
//       joinedDate: '2023-01-15',
//       image: '/api/placeholder/100/100'
//     },
//     {
//       id: 2,
//       name: 'Sushi World',
//       owner: 'Kenji Tanaka',
//       email: 'kenji@sushiworld.com',
//       phone: '+1 234-567-8902',
//       address: '456 Oak Ave, Los Angeles, CA',
//       cuisine: 'Japanese',
//       status: 'active',
//       rating: 4.8,
//       totalOrders: 980,
//       totalRevenue: "67,890",
//       joinedDate: '2023-02-20',
//       image: '/api/placeholder/100/100'
//     },
//     {
//       id: 3,
//       name: 'Burger House',
//       owner: 'Bob Wilson',
//       email: 'bob@burgerhouse.com',
//       phone: '+1 234-567-8903',
//       address: '789 Pine St, Chicago, IL',
//       cuisine: 'American',
//       status: 'suspended',
//       rating: 4.2,
//       totalOrders: 2100,
//       totalRevenue: "34,560",
//       joinedDate: '2022-11-10',
//       image: '/api/placeholder/100/100'
//     },
//     {
//       id: 4,
//       name: 'Taco Fiesta',
//       owner: 'Carlos Rodriguez',
//       email: 'carlos@tacofiesta.com',
//       phone: '+1 234-567-8904',
//       address: '321 Elm St, Miami, FL',
//       cuisine: 'Mexican',
//       status: 'inactive',
//       rating: 4.0,
//       totalOrders: 756,
//       totalRevenue: "23,450",
//       joinedDate: '2023-03-05',
//       image: '/api/placeholder/100/100'
//     }
//   ];

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
    props.pendindRestaurantCount(restaurants.filter((restaurant)=>restaurant.status == 'INACTIVE').length);
  
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

            {/* <div className="border-1 border-gray-300 rounded-md p-1">
                <select>
                    {cusines.map((cuisine,index)=>{
                        return (
                            <option value={cuisine} key={index}>{cuisine}</option>
                        )
                    })}
                </select>
            </div> */}


            
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
                    <RestaurantCard restaurant={restaurant} reloadList={setRestaurants} key={restaurant.id}/>
                )
            })}
                
        </div>
        )}
            
        
        </>
    )
}

export default AllRestaurantList