import React from 'react';
import Review from './review';

import style from './reviews.module.css';

export default function Reviews(props) {
  return (
    <div className={style.block}>
      <div className={style.title}>Reviews</div>

      {props.reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
