import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  // Dummy data (replace with actual cart data)
  const cartItems = [
    { id: 1, name: 'Paneer Butter Masala', quantity: 2, price: 180 },
    { id: 2, name: 'Veg Biryani', quantity: 1, price: 150 },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      <table className="table-auto border-collapse border border-gray-400 w-full max-w-2xl text-center mb-6">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-gray-400 px-4 py-2">Dish</th>
            <th className="border border-gray-400 px-4 py-2">Quantity</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id} className="bg-white">
              <td className="border border-gray-400 px-4 py-2">{item.name}</td>
              <td className="border border-gray-400 px-4 py-2">{item.quantity}</td>
              <td className="border border-gray-400 px-4 py-2">₹{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-4">
        <Link to="/customer/checkout">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Checkout
          </button>
        </Link>
        <Link to="/">
          <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
            Back
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
