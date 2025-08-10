import { CheckCircle2, Star, ShoppingCart, DollarSign, Calendar, Eye, Trash, Edit } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
const RestaurantCard = ({ restaurant }) => {

    const [orderCount, setOrderCount] = useState(0);
    const [revenue, setRevenue] = useState(0);

    const suspendRestaurant = async()=>{
        if(restaurant.status == 'SUSPENDED'){
            toast.error("Restaurant already suspended");
            return;
        }
        await axios.patch(`http://localhost:8080/restaurant/suspended/${restaurant.id}`)
        .then((res)=>{
            toast.success("Restaurant suspended");
            
        props.reloadList();
            
        })
        .catch((err)=>{
            toast.error("Failed to suspend restaurant : "+err.message);
        })
    }

    useEffect(() => {
        const fetchOrdersCount = async () => {
            try {

                const response = await axios.get(`http://localhost:8080/order/orderCountAndRevenueByRestaurantId/${restaurant.id}`);
                setOrderCount(response.data.orderCount);
                setRevenue(response.data.revenue);

            } catch (err) {
                console.log(err);
                toast.error("Failed to fetch orders Count");
            }
        }
        fetchOrdersCount();
    }, [])

    return (
        <>
            <div className="bg-white p-4 rounded-lg mt-3 ">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full w-12 h-12 bg-gray-300 flex
                items-center justify-center">R</div>
                        <div>
                            <h2>{restaurant.name}</h2>
                            <h3>{restaurant.address.addressLine1} . {restaurant.address.city}</h3>
                        </div>
                    </div>
                    {restaurant.status == 'ACTIVE' && (
                        <div className="flex items-center gap-1 bg-green-100 p-1 rounded-3xl px-3">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <h2>{restaurant.status}</h2>
                        </div>
                    )}
                    {restaurant.status == 'INACTIVE' && (
                        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-3xl px-3">
                            <CheckCircle2 className="w-4 h-4 text-gray-500" />
                            <h2>{restaurant.status}</h2>
                        </div>
                    )}
                    {restaurant.status == 'SUSPENDED' && (
                        <div className="flex items-center gap-1 bg-red-100 p-1 rounded-3xl px-3">
                            <CheckCircle2 className="w-4 h-4 text-red-500" />
                            <h2>{restaurant.status}</h2>
                        </div>
                    )}

                </div>
                <div className="flex items-center justify-evenly ">
                    <div className="flex items-center flex-col justify-center p-2 px-3">
                        <div className="flex gap-1 items-center text-yellow-500">
                            <Star className="w-4 h-4 fill-current " /><h2>{restaurant.avg_rating}</h2>
                        </div>
                        <h3 className="text-gray-500 text-sm">Rating</h3>
                    </div>



                    <div className="flex items-center flex-col justify-center p-2 px-3">
                        <div className="flex gap-1 items-center text-blue-500">
                            <ShoppingCart className="w-4 h-4 " /><h2 className="text-black">{orderCount}</h2>
                        </div>
                        <h3 className="text-gray-500 text-sm">Orders</h3>
                    </div>



                    <div className="flex items-center flex-col justify-center p-2 px-3">
                        <div className="flex gap-1 items-center text-green-500">
                            <DollarSign className="w-4 h-4 " /><h2 className="text-black">{revenue || 1000}</h2>
                        </div>
                        <h3 className="text-gray-500 text-sm">Revenue</h3>
                    </div>

                </div>


                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500 " />
                        <h3 className="text-gray-500 text-sm">Joined {restaurant.joinedDate}</h3>
                    </div>
                    <div className="flex
                items-center gap-2">
                        <Eye
                            className="text-blue-500 hover:scale-110 hover:text-blue-700 transition-transform duration-200 cursor-pointer"
                            
                        />
                        <Edit
                            className="text-gray-500 hover:scale-110 hover:text-gray-700 transition-transform duration-200 cursor-pointer"
                        />
                        <Trash
                            className="text-red-700 hover:scale-110 hover:text-red-900 transition-transform duration-200 cursor-pointer"
                            onClick={suspendRestaurant}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard;