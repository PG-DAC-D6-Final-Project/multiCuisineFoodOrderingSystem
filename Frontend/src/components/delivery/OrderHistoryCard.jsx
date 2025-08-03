

const OrderHistoryCard = () => {
    return (
        <div className="w-[80%] border-1 rounded-lg flex flex-col justify-around items-start my-6 p-6 shadow-xl gap-2">
            <div className="font-bold text-lg">Order #ord-m3</div>
            <div>Status: <span className="text-green-700 font-semibold">DELIVERED</span></div>
            <div>Delivered From: Soup & Salad Bar</div>
            <div>Delivered To: 111 Health Dr, Green City</div>
            <div className="text-green-700 font-semibold">Earned: $5.50</div>
        </div>
    )
}

export default OrderHistoryCard
