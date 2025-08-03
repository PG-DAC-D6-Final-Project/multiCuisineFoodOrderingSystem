import { Button } from '../ui/button'

const AvailableOrderCard = () => {
  return (
    <div className='border rounded-lg w-[28%] flex flex-col justify-around items-start my-6 p-6 shadow-xl gap-1'>
      <div className='font-bold text-xl'>Order #{"id"}</div>
      <div>Pickup: {"address"}</div>
      <div>Deliver to: {"address"}</div>
      <div className='text-green-700 text-lg font-medium'>Payout: {"\u20b9"}{"rupees"}</div>
      <div className='w-full flex justify-center'><Button variant="outline" className="cursor-pointer mt-3 border-orange-500 hover:bg-orange-100">Accept Order</Button></div>
    </div>
  )
}

export default AvailableOrderCard
