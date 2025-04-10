import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset the rating after submission
    } else {
      alert("Please select a rating between 1 and 5!");
    }
  };

  return (
    <div className="mt-4">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(star)}
            className={`cursor-pointer text-2xl ${
              star <= (hoveredRating || rating)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-2 bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700"
      >
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;