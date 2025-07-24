import OrderHistoryCard from "../../components/delivery/OrderHistoryCard"

const OrderHistory = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Order History</h1>
            <div className='flex flex-col justify-center items-center gap-3 my-8'>
                <OrderHistoryCard />
                <OrderHistoryCard />
                <OrderHistoryCard />
            </div>
        </div>
    )
}

export default OrderHistory
