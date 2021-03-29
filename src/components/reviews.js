import React from 'react';
import { Review } from './review';

export default function Reviews(props) {
  return (
    <div>
      <h2>{props.children}</h2>
      {props.reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
