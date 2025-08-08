import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/restaurant/EditItem/${id}`);
  }
  
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

  // Delete Menu Item from dashboard
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    axios
      .delete(`http://localhost:8080/menu-item/${id}`)
      .then(() => {
        // Remove from frontend state
        setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
        // alert("Menu item deleted successfully!");
      })
      .catch((err) => {
        console.error("Error deleting menu item:", err);
        alert("Failed to delete menu item.");
      });
  };

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
              <p>Cuisine: {item.cuisineName || "N/A"}</p>
              <p>Price: Rs.{item.price} /-</p>
              <p>Description: {item.description}</p>
              <div className=" flex gap-4">
                 <button className="bg-yellow-300 px-5 py-2 rounded text-white" onClick={() => handleEdit(item.id)}>Edit</button>
                 <button className="bg-orange-500 px-5 py-2 rounded text-white" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
