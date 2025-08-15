import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from "../../services/userServices";
import { toast } from "react-toastify";
import { clearCart } from "../../slices/cartSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  // Receive totalAmount from location.state, fallback to 0 if undefined
  const state = location.state || 0;

  const [paymentMethod, setPaymentMethod] = useState("CASH");

  const handlePay = async () => {
    let orderItems = [];
    for (let item of cartItems) {
      let ent = { menuItemId: item.id, quantity: item.quantity }
      orderItems.push(ent)
    }

    const payload = {
      order_date_time: new Date(Date.now() + 330 * 60 * 1000).toISOString().slice(0, 19),
      delivery_date_time: new Date(Date.now() + 360 * 60 * 1000).toISOString().slice(0, 19),
      subtotal: state?.subtotal,
      tax_amount: state?.taxAmount,
      delivery_fee: state?.deliveryFee,
      discount_amount: state?.discountAmount,
      total_amount: state?.totalAmount,
      payment_method: paymentMethod,
      orderstatus: "ORDERED",
      userId: sessionStorage.getItem("id"),
      restaurantId: cartItems[0].restaurantId,
      orderItems
    }
    // console.log(payload)

    const result = await createOrder(payload)
    if (result.status === 200) {
      toast.success("Order successful!")
      dispatch(clearCart());
      navigate("/customer/orders");
    }
    else {
      toast.error("Order failed!")
    }

  };

  const paymentOptions = ["CASH", "UPI", "CREDIT_CARD", "DEBIT_CARD"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-orange-50 to-orange-100">
      <h2 className="text-3xl font-bold mb-8 text-orange-700">Checkout</h2>

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <p className="text-2xl font-bold mb-6 text-orange-600">
          Total Bill: ₹{state?.totalAmount.toFixed(2)}
        </p>

        <div className="mb-6">
          <p className="mb-3 font-semibold text-gray-800">Choose Payment Method:</p>
          <div className="grid gap-3">
            {paymentOptions.map((option) => (
              <label
                key={option}
                className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition ${paymentMethod === option
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-300 hover:bg-gray-50"
                  }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={option}
                  checked={paymentMethod === option}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/customer/cart">
            <button className="bg-gray-400 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-500 transition">
              Back
            </button>
          </Link>
          <button
            onClick={handlePay}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
