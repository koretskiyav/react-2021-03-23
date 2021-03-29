import React from 'react';
import Rating from './rating';

import style from './review.module.css';

export default function Review(props) {
    return(
      <div className={style.card}>
        <h4>{props.review.user}:</h4>
        <p>{props.review.text}</p>
        <Rating rating={props.review.rating} />
      </div>
    );
}
