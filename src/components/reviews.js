import React from 'react';
import ReviewItem from './reviewItem';

export default function Reviews(props) {
  let overallRate = 0;
  for (let item of props.reviews) {
    overallRate += item.rating / props.reviews.length;
  }
  return (
    <div className="profile--reviews">
      <h3 className="profile--reviews__title">Reviews</h3>
      <div className="profile--reviews__rating mb-2">
        Restauran`s rating: {overallRate.toFixed(2)}
      </div>
      <div className="reviews--list">
        {props.reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
