import React from 'react';

import style from './product.module.css';
import Rating from './rate';

export default function Review(props) {
  return (
    <div className={style.card}>
      <h1>{props.review.user}</h1>
      <p>{props.review.text}</p>
      <Rating rating={props.review.rating} />
    </div>
  );
}
