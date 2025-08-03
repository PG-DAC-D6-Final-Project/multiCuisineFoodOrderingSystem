import React from 'react'
import ActiveOrderCard from '../../components/delivery/ActiveOrderCard'

const ActiveOrders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Active Orders</h1>
      <div className='flex flex-col justify-center items-center gap-3 my-8'>
        <ActiveOrderCard />
        <ActiveOrderCard />
        <ActiveOrderCard />
      </div>
    </div>
  )
}

export default ActiveOrders
