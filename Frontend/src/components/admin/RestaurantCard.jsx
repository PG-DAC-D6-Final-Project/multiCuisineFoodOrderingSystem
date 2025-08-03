import { CheckCircle2, Star,ShoppingCart, DollarSign, Calendar, Eye,Trash,Edit } from "lucide-react";
const RestaurantCard = ({restaurant})=>{
    return (
        <>
        <div className="bg-white p-4 rounded-lg mt-3 ">
            <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
                <div className="rounded-full w-12 h-12 bg-gray-300 flex
                items-center justify-center">R</div>
                <div>
                    <h2>{restaurant.name}</h2>
                    <h3>{restaurant.cuisine} . {restaurant.owner}</h3>
                </div>
            </div>
            {restaurant.status == 'active' && (
                <div className="flex items-center gap-1 bg-green-100 p-1 rounded-3xl px-3">
                <CheckCircle2 className="w-4 h-4 text-green-500"/>
                <h2>{restaurant.status}</h2>
            </div>
            )}
            {restaurant.status == 'inactive' && (
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-3xl px-3">
                <CheckCircle2 className="w-4 h-4 text-gray-500"/>
                <h2>{restaurant.status}</h2>
            </div>
            )}
            {restaurant.status == 'suspended' && (
                <div className="flex items-center gap-1 bg-red-100 p-1 rounded-3xl px-3">
                <CheckCircle2 className="w-4 h-4 text-red-500"/>
                <h2>{restaurant.status}</h2>
            </div>
            )}
            
            </div>
            <div className="flex items-center justify-evenly ">
                <div className="flex items-center flex-col justify-center p-2 px-3">
                    <div className="flex gap-1 items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current "/><h2>{restaurant.rating}</h2>
                    </div>
                    <h3 className="text-gray-500 text-sm">Rating</h3>
                </div>

               

                <div className="flex items-center flex-col justify-center p-2 px-3">
                    <div className="flex gap-1 items-center text-blue-500">
                    <ShoppingCart className="w-4 h-4 "/><h2 className="text-black">{restaurant.totalOrders}</h2>
                    </div>
                    <h3 className="text-gray-500 text-sm">Orders</h3>
                </div>



                <div className="flex items-center flex-col justify-center p-2 px-3">
                    <div className="flex gap-1 items-center text-green-500">
                    <DollarSign className="w-4 h-4 "/><h2 className="text-black">{restaurant.totalRevenue}</h2>
                    </div>
                    <h3 className="text-gray-500 text-sm">Revenue</h3>
                </div>

            </div>


            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500 "/>
                <h3 className="text-gray-500 text-sm">Joined {restaurant.joinedDate}</h3>
                </div>
                <div className="flex
                items-center gap-2">
                    <Eye className="text-blue-500"/>
                    <Edit className="text-gray-500"/>
                    <Trash className="text-red-700"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantCard;