import React, { useState } from "react";

function Dashboard(){
  
    const restaurants = [
    {
      id: 1,
      name: "Tandoori Treats",
      cuisine: "Indian",
      Price: 259,
      description: "Very good",
      image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 2,
      name: "Sushi World",
      cuisine: "Japanese",
      Price: 250,
      description: "Very good",
      image:"https://imgs.search.brave.com/C_Xlx1U1ssH9IxBvZoEy6iTZftIaxvjcbJmSrVMjQvY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvLzc0T01WbzFZ/TEg5SE1aZ192NlRN/UlEvMzQ4cy5qcGc"
    },
    {
      id: 3,
      name: "Pasta Palace",
      cuisine: "Italian",
      Price: 300,
      description: "Very good",
      image:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=60"
    },
    {
        id:4,
        name: "Black Pepper",
        cuisine:"Indian",
        Price:450,
        description: "Very good",
        image:"https://imgs.search.brave.com/STOKY4wGRff6r_BWn80VWAAm-gDS6sqdBYZUMPBwQvs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uaWtz/aGFybWFjb29rcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTEvQnV0dGVy/Q2hpY2tlbkRTQ181/NjE2LTc2OHg1MTIu/anBn"
    },
    {
      id: 5,
      name: "Tandoori Treats",
      cuisine: "Indian",
      Price: 219,
      location: "Mumbai",
      image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 6,
      name: "Sushi World",
      cuisine: "Japanese",
      Price: 650,
      location: "Pune",
      image:"https://imgs.search.brave.com/C_Xlx1U1ssH9IxBvZoEy6iTZftIaxvjcbJmSrVMjQvY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvLzc0T01WbzFZ/TEg5SE1aZ192NlRN/UlEvMzQ4cy5qcGc"
    },
    {
      id: 7,
      name: "Pasta Palace",
      cuisine: "Italian",
      Price: 380,
      location: "Bangalore",
      image:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=60"
    },
    {
        id:8,
        name: "Black Pepper",
        cuisine:"Indian",
        Price:685,
        location:"Dehradoon",
        image:"https://imgs.search.brave.com/STOKY4wGRff6r_BWn80VWAAm-gDS6sqdBYZUMPBwQvs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uaWtz/aGFybWFjb29rcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTEvQnV0dGVy/Q2hpY2tlbkRTQ181/NjE2LTc2OHg1MTIu/anBn"
    }
  ];

    return(
      <div className="flex">
        <div className="p-6 bg-orange-400 rounded">
            <h1 className="text-2xl text-black">Home</h1><hr className="border-black border-t-2 my-4"/>
            <h1 className="text-2xl font-bold mb-4">Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {restaurants.map((restaurant) => (
             <div
                key={restaurant.id}
                className="bg-orange-100 rounded-xl shadow p-4"
             >
                <img src={restaurant.image} alt={restaurant.name} className="h-60 w-80 object-cover rounded"/>
                <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                <p>Cuisine: {restaurant.cuisine}</p>
                <p>Rating: Rs.{restaurant.Price} /-</p>
                <p>Description: {restaurant.description}</p>
             </div>
                ))}
            </div>
        </div>
      </div>
    )
}

export default Dashboard;