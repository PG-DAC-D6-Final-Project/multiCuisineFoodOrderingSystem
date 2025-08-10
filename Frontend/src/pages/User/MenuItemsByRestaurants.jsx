import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import menuItem0 from '../../assets/resources/menuItem0.jpeg';
import menuItem1 from '../../assets/resources/menuItem1.jpeg';
import menuItem2 from '../../assets/resources/menuItem2.jpeg';
import menuItem3 from '../../assets/resources/menuItem3.jpeg';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addItem } from '../../slices/cartSlice';

const menuItemsImages = [menuItem0, menuItem1, menuItem2, menuItem3];

const MenuItemsByRestaurants = () => {
  const location = useLocation();
  const { restaurantId, restaurantName } = location.state || {};

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!restaurantId) {
      setLoading(false);
      return;
    }
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/restaurant/${restaurantId}/Dashboard`
        );
        setMenuItems(response.data.menuItems);
      } catch (error) {
        console.error('Error while fetching menu items:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, [restaurantId]);

  if (!restaurantId || loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        {!restaurantId ? (
          <p className="text-center mt-10 text-xl text-gray-500 font-semibold">
            No restaurant selected.
          </p>
        ) : (
          <div className="mt-16 mb-10 animate-spin h-10 w-10 border-4 border-orange-500 border-t-transparent rounded-full"></div>
        )}
      </div>
    );
  }

  const handleAddToCart = (item) => {
    dispatch(addItem({ ...item, restaurantId }))
    toast.success(`${item.name} added to cart`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-100 to-white px-4 pb-12 pt-8">
      <div className="mb-6 max-w-3xl mx-auto">
        <Link to="/">
          <button
            className="flex items-center gap-2 bg-orange-50 px-5 py-2 text-orange-700 rounded shadow hover:bg-orange-200 transition-all hover:scale-105 font-medium"
          >
            <span className="text-xl">←</span>
            Back
          </button>
        </Link>
      </div>

      <h2 className="text-4xl font-bold text-center text-orange-500 mb-4 drop-shadow">
        {restaurantName
          ? `Menu for ${restaurantName}`
          : 'Menu Items'}
      </h2>
      <p className="text-center text-lg text-gray-500 mb-10">
        Discover delicious options below.
      </p>

      {menuItems.length === 0 ? (
        <div className="text-center text-lg text-gray-400 font-medium mt-20">
          No menu items available for this restaurant.
        </div>
      ) : (
        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={
                  item.image_url ||
                  'https://via.placeholder.com/150'
                }
                alt={item.name}
                className="w-full h-48 object-cover border-b border-orange-100 group-hover:scale-105 group-hover:brightness-95 transition duration-300"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-orange-600 mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {item.description ||
                    'A delicious menu item!'}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-green-700 font-bold text-xl">
                    ₹{item.price}
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded mt-3 hover:bg-orange-600"
                    onClick={() => { handleAddToCart(item) }}>
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* Add a subtle "shine" effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-gradient-to-tr from-orange-300 to-transparent transition" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItemsByRestaurants;
