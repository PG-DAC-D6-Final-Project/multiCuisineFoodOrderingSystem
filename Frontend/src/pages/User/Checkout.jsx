import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery')

  const handlePay = () => {
    alert('dummy alert')
    navigate('/')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <p className="text-lg mb-4">Total Bill: ₹510</p>

        <div className="mb-4">
          <p className="mb-2 font-semibold">Choose Payment Method:</p>
          <label className="block mb-1">
            <input
              type="radio"
              name="payment"
              value="Netbanking"
              checked={paymentMethod === 'Netbanking'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{' '}
            Netbanking
          </label>
          <label className="block mb-1">
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked={paymentMethod === 'Cash on Delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{' '}
            Cash on Delivery
          </label>
          <label className="block mb-1">
            <input
              type="radio"
              name="payment"
              value="Gpay"
              checked={paymentMethod === 'Gpay'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{' '}
            Gpay
          </label>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="Paytm"
              checked={paymentMethod === 'Paytm'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{' '}
            Paytm
          </label>
        </div>

        <div className="flex justify-between mt-6">
          <Link to="/customer/cart">
            <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
              Back
            </button>
          </Link>
          <button
            onClick={handlePay}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
