import { Search } from "lucide-react";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AllRestaurantList = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const status = ["Active", "Inactive", "Suspended"];

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/restaurant/getAllRestaurants"
        );
        setRestaurants(response.data);
      } catch (err) {
        toast.error("Failed to fetch restaurants");
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  useEffect(() => {
    props.restaurantCount(restaurants.length);
    props.activeRestaurantCount(
      restaurants.filter((restaurant) => restaurant.status === "ACTIVE").length
    );
    props.pendindRestaurantCount(
      restaurants.filter((restaurant) => restaurant.status === "PENDING").length
    );
  }, [restaurants]);

  // Filter restaurants
  const filterRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchStatus === "" ||
        restaurant.status.toLowerCase() === searchStatus.toLowerCase())
  );

  return (
    <>
      <div className="flex item-center justify-evenly">
        <div className="search-bar flex items-center gap-2 border-gray-300 border-1 rounded-md p-1 ">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            className="outline-none"
            type="text"
            placeholder="Search Restaurants"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="border border-gray-300 rounded-md p-1">
          <select
            className="outline-none bg-transparent w-full"
            onChange={(e) => setSearchStatus(e.target.value)}
            value={searchStatus}
          >
            <option value="">All Status</option>
            {status.map((status, index) => (
              <option value={status} key={index}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filterRestaurants.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-xl font-semibold text-gray-700">
            No Restaurants Found
          </h1>
          <p className="text-gray-500 mt-1">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <div>
          {filterRestaurants.map((restaurant) => (
            <RestaurantCard
              restaurant={restaurant}
              reloadList={setRestaurants}
              key={restaurant.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AllRestaurantList;
