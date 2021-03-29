import React from 'react';
import Rate from './rate';

import style from './review.module.css';

export default function Review(props) {
  const review = props.review;

  return (
    <div className={style.card}>
      <div className={style.user}>{review.user}</div>
      <Rate rating={review.rating} />
      <div className={style.text}>{review.text}</div>
    </div>
  );
}
