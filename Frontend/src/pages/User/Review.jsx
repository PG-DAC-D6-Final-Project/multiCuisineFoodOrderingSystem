import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ReviewPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("id");

  const [comment, setComment] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    // Fetch items of the order to rate
    axios
      .get(`http://localhost:8080/order/${orderId}`)
      .then((res) => {
        setMenuItems(res.data.orderItems || []);
        // Initialize rating for each item
        const initialRatings = {};
        (res.data.orderItems || []).forEach((item) => {
          initialRatings[item.menuItem.id] = 0;
        });
        setRatings(initialRatings);
      })
      .catch((err) => console.error(err));
  }, [orderId]);

  const handleStarClick = (menuItemId, ratingValue) => {
    setRatings((prev) => ({
      ...prev,
      [menuItemId]: ratingValue,
    }));
  };

  const handleSubmit = () => {
    const listOfItemRating = Object.entries(ratings).map(([menuItemId, itemRating]) => ({
      menuItemId: parseInt(menuItemId),
      itemRating,
    }));

    const reviewData = {
      userId: parseInt(userId),
      comment,
      orderId: parseInt(orderId),
      listOfItemRating,
    };

    axios
      .post("http://localhost:8080/review/addReview", reviewData)
      .then(() => {
        alert("Review submitted successfully!");
        navigate("/customer/orders");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to submit review");
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Rate Your Order</h2>

      <label className="block mb-2 font-semibold">Comment:</label>
      <textarea
        className="w-full border p-2 rounded mb-4"
        rows="3"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review here..."
      />

      {menuItems.map((item) => (
        <div key={item.menuItem.id} className="mb-4">
          <p className="font-semibold">{item.menuItem.name}</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarClick(item.menuItem.id, star)}
                className={`cursor-pointer text-2xl ${
                  ratings[item.menuItem.id] >= star ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Submit Review
      </button>
    </div>
  );
}

export default ReviewPage;
