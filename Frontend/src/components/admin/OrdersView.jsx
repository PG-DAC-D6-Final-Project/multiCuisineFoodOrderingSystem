import { Bell, Search } from "lucide-react"
import OrderCard from "./OrderCard";
const OrdersView = ()=>{

    const Orders = [
      {
        id: 'ORD-001',
        customerName: 'John Doe',
        customerPhone: '+1-234-567-8900',
        orderTime: '2024-01-15T10:30:00',
        status: 'pending',
        cuisine: 'Italian',
        restaurant: 'Bella Vista',
        items: [
          { name: 'Margherita Pizza', qty: 2, price: 24.99 },
          { name: 'Caesar Salad', qty: 1, price: 12.99 }
        ],
        total: 62.97,
        deliveryAddress: '123 Main St, Downtown',
        paymentMethod: 'Credit Card',
        estimatedTime: 45
      },
      {
        id: 'ORD-002',
        customerName: 'Sarah Chen',
        customerPhone: '+1-234-567-8901',
        orderTime: '2024-01-15T11:15:00',
        status: 'preparing',
        cuisine: 'Chinese',
        restaurant: 'Golden Dragon',
        items: [
          { name: 'Kung Pao Chicken', qty: 1, price: 18.99 },
          { name: 'Fried Rice', qty: 2, price: 12.99 }
        ],
        total: 44.97,
        deliveryAddress: '456 Oak Ave, Uptown',
        paymentMethod: 'PayPal',
        estimatedTime: 30
      },
      {
        id: 'ORD-003',
        customerName: 'Mike Johnson',
        customerPhone: '+1-234-567-8902',
        orderTime: '2024-01-15T09:45:00',
        status: 'out-for-delivery',
        cuisine: 'Mexican',
        restaurant: 'Taco Fiesta',
        items: [
          { name: 'Beef Burrito', qty: 3, price: 13.99 },
          { name: 'Guacamole', qty: 2, price: 4.99 }
        ],
        total: 51.95,
        deliveryAddress: '789 Pine St, Midtown',
        paymentMethod: 'Cash',
        estimatedTime: 15
      },
      {
        id: 'ORD-004',
        customerName: 'Emily Davis',
        customerPhone: '+1-234-567-8903',
        orderTime: '2024-01-15T12:00:00',
        status: 'delivered',
        cuisine: 'Indian',
        restaurant: 'Spice Palace',
        items: [
          { name: 'Chicken Tikka Masala', qty: 1, price: 19.99 },
          { name: 'Naan Bread', qty: 2, price: 3.99 },
          { name: 'Basmati Rice', qty: 1, price: 5.99 }
        ],
        total: 33.96,
        deliveryAddress: '321 Elm St, Southside',
        paymentMethod: 'Credit Card',
        estimatedTime: 0
      }
    ];

    return (
  <>
    <div className="p-3 bg-white rounded-lg mb-2">
     
      

        <div className="flex justify-evenly p-2 gap-2 items-center">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search orders..."
        className=" border border-gray-300 rounded-md px-4 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
      />

      {/* Filters */}
      
      <select className=" border border-gray-300 rounded-md px-4 py-2 mb-3 text-sm text-gray-700">
        <option>All Status</option>
        <option>Pending</option>
        <option>Delivered</option>
        <option>Cancelled</option>
      </select>

      

      <select className=" border border-gray-300 rounded-md px-4 py-2 mb-3 text-sm text-gray-700">
        <option>Today</option>
        <option>Last 7 Days</option>
        <option>This Month</option>
      </select>

      <div className="flex items-center gap-2">
          <div className="relative">
            <div className="bg-orange-100 rounded-full p-2">
              <Bell className="text-orange-500 w-5 h-5" />
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Active Orders</p>
            <p className="text-lg font-bold">3</p>
          </div>
        </div>
      </div>
    </div>

    {/* Orders */}

    <div className="bg-white p-4">
        <h2 >Orders (4)</h2>
        <hr className="text-gray-300  mt-3"/>

        <div>
            {Orders.map((order)=>{
                return <OrderCard order = {order} key= {order.id}/>
            })}
            
        </div>
    </div>
    </>
  );
};



export default OrdersView