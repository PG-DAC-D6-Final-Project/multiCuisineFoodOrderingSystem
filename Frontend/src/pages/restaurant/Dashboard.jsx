import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Step 1: Get restaurantId from localStorage
  const restaurantId = localStorage.getItem("restaurantId");

  // Step 2: Fetch menu items using axios
  useEffect(() => {
    if (!restaurantId) {
      console.error("No restaurantId found in localStorage");
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:8080/menu-item/${restaurantId}`)
      .then((res) => {
        setMenuItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menu items:", err);
        setLoading(false);
      });
  }, [restaurantId]);

  // Step 3: Show loading, no data, or menu items
  if (loading) {
    return <p className="p-6 text-lg">Loading...</p>;
  }

  if (menuItems.length === 0) {
    return <p className="p-6 text-lg font-semibold">No item present</p>;
  }

  return (
    <div className="flex">
      <div className="p-6 bg-orange-400 rounded w-full">
        <h1 className="text-2xl text-black">Home</h1>
        <hr className="border-black border-t-2 my-4" />
        <h1 className="text-2xl font-bold mb-4">Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-orange-100 rounded-xl shadow p-4"
            >
              <img
                src={item.imageUrl || "https://imgs.search.brave.com/OwXdOWW5Rs97loNV3rD9jvTj9Izuhni0_uyOyy0CyTI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dmVkYW50dS5jb20v/c2VvL2NvbnRlbnQt/aW1hZ2VzLzA4Njdi/ODkyLTMzNmItNDU2/YS04OWU3LWE2MDU2/NjE0Y2MyNi5wbmc"}
                alt={item.name}
                className="h-60 w-80 object-cover rounded"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>Cuisine: {item.cuisineTypeName || "N/A"}</p>
              <p>Price: Rs.{item.price} /-</p>
              <p>Description: {item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
