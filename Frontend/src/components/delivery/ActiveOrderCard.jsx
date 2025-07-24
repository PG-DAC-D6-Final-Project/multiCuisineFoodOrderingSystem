import { Button } from '../ui/button'

const ActiveOrderCard = () => {
    return (
        <div className="w-[80%] border-1 rounded-lg flex flex-col justify-around items-start my-6 p-6 shadow-xl gap-2">
            <div><span className='font-semibold text-md'>Status:</span> <span className='text-orange-400 font-semibold'>ACCEPTED</span></div>
            <div><span className='font-semibold text-md'>Restaurant:</span> Spicy Tacos</div>
            <div><span className='font-semibold text-md'>Restaurant Address:</span> 303 Fiesta Rd, San Jose</div>
            <div><span className='font-semibold text-md'>Customer:</span> Carlos Ramirez</div>
            <div><span className='font-semibold text-md'>Delivery Address:</span> 404 Cactus Way, San Jose</div>
            <div><span className='font-semibold text-md'>Items:</span> 3x Chicken Tacos, 1x Guacamole & Chips</div>
            <div><span className='font-semibold text-md'>Instructions:</span> Knock loudly, dog is friendly.</div>
            <div><span className='font-semibold text-md'>Estimated Payout:</span> <span className='text-green-700 font-semibold'>{"\u20b9"}7.20</span></div>
            <div className='w-full flex justify-around mt-1'>
                <Button variant="outline" className="cursor-pointer mt-3 border-orange-500 text-white bg-green-500 hover:bg-green-700 hover:text-white">Mark as Picked Up</Button>
                <Button variant="outline" className="cursor-pointer mt-3 border-orange-500 text-white bg-red-500 hover:bg-red-700 hover:text-white">Cancel Order</Button>
            </div>
        </div>
    )
}

export default ActiveOrderCard
