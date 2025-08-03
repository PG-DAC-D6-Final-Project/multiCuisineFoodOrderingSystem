import { Clock, Eye, Check, X } from "lucide-react";
const PendingRestaurantRequests = () => {

        const pendingRestaurants = [
  {
    name: "Burger Town",
    cuisine: "American",
    owner: "John Doe",
    joinedDate: "2025-06-30",
    rating: 4.2,
    orders: 560,
    revenue: 23900,
    status: "pending",
  },
  {
    name: "Spicy Indian",
    cuisine: "Indian",
    owner: "Ravi Kumar",
    joinedDate: "2025-07-10",
    rating: 4.7,
    orders: 820,
    revenue: 32000,
    status: "pending",
  },
];



         return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
        <Clock className="w-5 h-5 text-yellow-500" /> Pending Restaurant Requests
      </h2>

      {pendingRestaurants.map((restaurant, index) => (
        <div key={index} className="flex justify-between items-center border p-4 mb-3 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
              {restaurant.name[0]}
            </div>
            <div>
              <h3 className="text-md font-semibold">{restaurant.name}</h3>
              <p className="text-sm text-gray-500">
                {restaurant.cuisine} · {restaurant.owner}
              </p>
              <p className="text-xs text-gray-400 mt-1">Joined {restaurant.joinedDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-yellow-600 font-medium text-sm">
              ⭐ {restaurant.rating}
            </div>
            <div className="text-blue-600 text-sm flex items-center gap-1">
              🛒 {restaurant.orders}
            </div>
            <div className="text-green-600 text-sm">
              ${restaurant.revenue.toLocaleString()}
            </div>
          </div>

          <div className="flex gap-3">
            <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200">
              <Eye className="w-5 h-5 text-blue-600" />
            </button>
            <button className="p-2 rounded-full bg-green-100 hover:bg-green-200">
              <Check className="w-5 h-5 text-green-600" />
            </button>
            <button className="p-2 rounded-full bg-red-100 hover:bg-red-200">
              <X className="w-5 h-5 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingRestaurantRequests