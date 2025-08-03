import { Clock, Check ,Truck ,CookingPot} from "lucide-react";

const OrderCard = ({order}) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-md border-gray-500 mb-4">
      {/* Left Side */}
      <div>
        <h2 className="font-bold text-sm mb-1">{order.id}</h2>
        <p className="text-sm text-gray-700">{order.customerName}</p>
        <p className="text-xs text-gray-500">{order.orderTime}</p>

        <p className="text-sm text-gray-700 mt-2">{order.cuisine} • {order.restaurant}</p>
        <p className="font-bold mt-1 text-md">$ {order.total}</p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-end">

        {order.status =="pending" && (
            <>
            <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full mb-8">
            
          <Clock className="w-4 h-4" />
          <span>{order.status}</span>
        </div>

        <div className="text-xs text-gray-500">ETA</div>
        <div className="text-orange-600 font-semibold">45 min

        </div>
        </>
        )}

        {/* for prepairing */}
        
        {order.status =="preparing" && (
            <>
            <div className="flex items-center gap-1 bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-8">
            
          <CookingPot className="w-4 h-4" />
          <span>{order.status}</span>
        </div>

        <div className="text-xs text-gray-500">ETA</div>
        <div className="text-orange-600 font-semibold">{order.estimatedTime} min

        </div>
        </>

        

        )}

        {/* for out-for-delivery */}
        {order.status =="out-for-delivery" && (
            <>
            <div className="flex items-center gap-1 bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full mb-8">
            
          <Truck className="w-4 h-4" />
          <span>{order.status}</span>
        </div>

        <div className="text-xs text-gray-500">ETA</div>
        <div className="text-orange-600 font-semibold">45 min

        </div>
        </>
        )}


        {/* for delivered */}

        {order.status =="delivered" && (
            <>
            <div className="flex items-center gap-1 bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-8">
            
          <Check className="w-4 h-4" />
          <span>{order.status}</span>
        </div>

        
        
        </>
        )}


        
      </div>
    </div>
  );
};

export default OrderCard;
