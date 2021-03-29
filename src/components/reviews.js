import React from 'react';
import Rate from './rate';

import style from './reviews.module.css';

export default function Reviews(props) {
  return (
    <div className={style.reviewsContainer}>
      <h3>All reviews:</h3>
      {props.reviews.map((review) => {
        return (
          <div key={review.id} className={style.review}>
            <h4>{review.user}</h4>
            <Rate rating={review.rating} />
            <p className={style.reviewText}>{review.text}</p>
          </div>
        );
      })}
    </div>
  );
}
