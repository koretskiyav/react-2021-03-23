import React from 'react';
import { Rate } from './rate';
import style from './review.module.css';

export const Review = (props) => {
  console.log(props);
  return (
    <div className={style.review}>
      <Rate value={props.review.rating} />
      <p>{props.review.user}</p>
      <p>{props.review.text}</p>
    </div>
  );
};
