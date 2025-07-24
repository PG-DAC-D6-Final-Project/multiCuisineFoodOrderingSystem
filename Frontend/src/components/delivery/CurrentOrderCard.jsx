

const CurrentOrderCard = ({ order }) => {
    return (
        <div className="border-orange-400 border rounded-2xl p-2 m-2 flex flex-row justify-around items-start">
            <div  className="font-medium">OrderId: {order.orderId}</div>
            <div className="flex justify-around items-start gap-2"><div className="font-medium">Restaurant:</div>
                <div>
                    <div>{order.restaurant.name}</div>
                    <div>{order.restaurant.address.line1}</div>
                    <div>{order.restaurant.address.line2}</div>
                    <div>{order.restaurant.address.city}</div>
                    <div>{order.restaurant.address.state}</div>
                    <div>{order.restaurant.address.zipCode}</div>
                </div>
            </div>
            <div className="flex justify-around items-start gap-2"><div className="font-medium">Customer:</div>
                <div>
                    <div>{order.customer.firstName} {order.customer.lastName}</div>
                    <div>{order.customer.address.line1}</div>
                    <div>{order.customer.address.line2}</div>
                    <div>{order.customer.address.city}</div>
                    <div>{order.customer.address.state}</div>
                    <div>{order.customer.address.zipCode}</div>
                </div>
            </div>
        </div>
    )
}

export default CurrentOrderCard
