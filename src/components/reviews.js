import React from 'react';
import Rate from './rate';
import style from './product.module.css';


export default function Reviews(props) {

  return (
    <div className={style.card}>
      {props.reviews.map((review) => (
        <div>
          <h3>Review by {review.user}</h3>
          <Rate value={review.rating}/>
          <p>{review.text}</p>
        </div>
        ))}
    </div>

  );
}