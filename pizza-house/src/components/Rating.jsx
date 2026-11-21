
import { useState } from "react";

function Rating({ productId, rating = 4.5, reviews = 0 }) {

  const [userRating, setUserRating] = useState(() => {
    const savedRating = localStorage.getItem(
      `pizza-rating-${productId}`
    );

    return savedRating ? Number(savedRating) : 0;
  });

  function handleRating(value) {
    setUserRating(value);

    localStorage.setItem(
      `pizza-rating-${productId}`,
      value.toString()
    );
  }

  return (
    <div className="rating-container">

      <div className="rating-display">
        <span className="rating-stars">★</span>
        <strong>{rating.toFixed(1)}</strong>
        <span className="rating-reviews">
          ({reviews} reviews)
        </span>
      </div>

      <div className="user-rating">
        <span>Rate this product:</span>

        <div className="rating-buttons">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={star <= userRating ? "selected" : ""}
              onClick={() => handleRating(star)}
              aria-label={`Rate ${star} stars`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {userRating > 0 && (
        <p className="rating-thanks">
          Thank you! Your rating: {userRating}/5
        </p>
      )}

    </div>
  );
}

export default Rating;
