import React from 'react';
import Rate from './rate'

export default function Review(props) {
  return (
    <div>
      <p>{props.review.user}</p>
      <p>{props.review.text}</p>
      <Rate rate={props.review.rating} />
    </div>
  )
}
