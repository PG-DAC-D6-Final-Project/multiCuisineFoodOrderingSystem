import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RateOrder = () => {
  const { orderId } = useParams();
  const userId = sessionStorage.getItem("id");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); // for star hover effect
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const stars = [1, 2, 3, 4, 5];

  const submitReview = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/review/addReview",
        {
          userId: Number(userId),
          orderId: Number(orderId),
          rating,
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Thank you for your feedback!");
        navigate("/customer/orders"); // redirect back to orders page or wherever you want
      } else {
        alert("Failed to submit rating. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the review.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-orange-600">Rate Your Order</h2>

      <form onSubmit={submitReview}>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Rating:</label>
          <div className="flex space-x-2 text-3xl cursor-pointer">
            {stars.map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className={`${(hoverRating || rating) >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Comment:</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comments here..."
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit Rating"}
        </button>
      </form>
    </div>
  );
};

export default RateOrder;
