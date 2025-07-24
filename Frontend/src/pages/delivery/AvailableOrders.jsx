import React from 'react'
import AvailableOrderCard from '../../components/delivery/AvailableOrderCard'

const AvailableOrders = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Available Orders</h1>
            <div className='flex justify-start items-center flex-wrap gap-[8%] p-6'>
                <AvailableOrderCard />
                <AvailableOrderCard />
                <AvailableOrderCard />
                <AvailableOrderCard />
                <AvailableOrderCard />
            </div>
        </div>
    )
}

export default AvailableOrders
