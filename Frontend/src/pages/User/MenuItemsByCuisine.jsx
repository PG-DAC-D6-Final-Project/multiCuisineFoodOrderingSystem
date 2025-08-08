import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenuItemsByCuisineType } from "../../services/userServices";
import image from "../../assets/resources/indian.png";
import { Button } from "../../components/ui/button";
import { toast } from "react-toastify";

const MenuItemsByCuisine = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const result = await getMenuItemsByCuisineType(id);

        if (result.status === 200) {
          setMenuItems(result.data);
        } else {
          console.error("Error fetching menu items");
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, [id]);

  const handleAddToCart = () => {
    toast.success("Added to cart.");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Menu Items by Cuisine
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading menu items...</p>
      ) : menuItems.length === 0 ? (
        <p className="text-gray-500">No menu items found for this cuisine.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm text-orange-600 font-medium mb-2">
                  {item.restaurant?.name}
                </p>
                <p className="text-lg font-bold text-green-600 mb-4">
                  ₹{item.price.toFixed(2)}
                </p>

                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 transition-colors duration-300"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItemsByCuisine;
