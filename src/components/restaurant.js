import React, { useState } from 'react';
import Menu from './menu';
import Rating from './rate';
import Reviews from './reviews';

export default function Restaurant(props) {
  const [showReview, setShowReview] = useState(false);

  const avgRating =
    props.restaurant.reviews.reduce((total, next) => total + next.rating, 0) /
    props.restaurant.reviews.length;

  return (
    <div>
      <button onClick={() => setShowReview(!showReview)}>
        {!showReview ? 'Show review' : 'Close review'}
      </button>
      <div>
        Average rating: <Rating rating={avgRating} />
      </div>
      {!showReview ? (
        <Menu menu={props.restaurant.menu} />
      ) : (
        <Reviews menu={props.restaurant.reviews} />
      )}
    </div>
  );
}
