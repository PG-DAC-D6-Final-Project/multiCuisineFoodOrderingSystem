import React, { useState } from "react";

function RemoveMenuItems() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Paneer Butter Masala",
      cuisineType: "Indian",
      price: 220,
    },
    {
      id: 2,
      name: "Veg Fried Rice",
      cuisineType: "Chinese",
      price: 180,
    },
    {
      id: 3,
      name: "Margherita Pizza",
      cuisineType: "Italian",
      price: 250,
    },
  ]);

  const handleDelete = (id) => {
    const updatedItems = menuItems.filter((item) => item.id !== id);
    setMenuItems(updatedItems);
  };

  return (
    <div className="flex w-full">
        <div className="min-h-screen w-full bg-orange-400 p-6 flex items-center justify-center">
      <div className="bg-white shadow-xl p-6 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-orange-400 mb-6">
          Remove Menu Items
        </h2>

        {menuItems.length === 0 ? (
          <p className="text-center text-gray-500">No items to display.</p>
        ) : (
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.cuisineType} | ₹{item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  );
}

export default RemoveMenuItems;
