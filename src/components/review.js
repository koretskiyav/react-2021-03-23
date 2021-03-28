import React from 'react';
import Rate from './rate';
import style from './review.module.css'

export default function Review(props) {
  return (
    <div className={style.container}>
      <div>
        <h3>{props.review.user}</h3>
        <div>{props.review.text}</div>
      </div>
      <Rate rate={props.review.rating} backgroundColor="rgb(245, 245, 230)" />
    </div>
  )
}
