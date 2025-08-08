import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Your Cart is Empty</h2>
        <Link to="/">
          <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Your Cart</h2>

      <table className="w-full max-w-3xl table-auto border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-orange-200 text-gray-800 uppercase text-sm font-semibold">
            <th className="border border-gray-300 px-6 py-3">Dish</th>
            <th className="border border-gray-300 px-6 py-3">Quantity</th>
            <th className="border border-gray-300 px-6 py-3">Price</th>
            <th className="border border-gray-300 px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="bg-white hover:bg-gray-100 transition">
              <td className="border border-gray-300 px-6 py-4 text-left font-medium">
                {item.name}
              </td>
              <td className="border border-gray-300 px-6 py-4">{item.quantity}</td>
              <td className="border border-gray-300 px-6 py-4">
                ₹{(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="border border-gray-300 px-6 py-4">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:text-red-800 font-semibold transition"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr className="bg-orange-100 font-bold text-gray-800">
            <td className="border border-gray-300 px-6 py-4 text-right" colSpan={2}>
              Total
            </td>
            <td className="border border-gray-300 px-6 py-4">₹{totalPrice.toFixed(2)}</td>
            <td className="border border-gray-300 px-6 py-4"></td>
          </tr>
        </tbody>
      </table>

      <div className="flex gap-4 mt-8">
        <Link to="/customer/checkout">
          <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition">
            Checkout
          </button>
        </Link>
        <button
          onClick={handleClear}
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
        >
          Clear Cart
        </button>
        <Link to="/">
          <button className="bg-gray-400 text-white px-6 py-3 rounded hover:bg-gray-500 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
