import React from 'react';
import Rate from './rate';

function Reviews(props) {
  return (
    <div>
      <p>Rewiews about us:</p>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <hr />
          <p>Text review: {review.text}</p>
          <p>Name user: {review.user}</p>
          <Rate rating={review.rating} />
        </div>
      ))}
    </div>
  );
}
export default Reviews;
