import React from 'react';
import Rate from '../Rate/Rate';
import style from './Reviews.module.scss';

export default function Reviews({ reviews }) {
  return (
    <ul className={style.reviewList}>
      {reviews.map((review) => {
        return (
          <li key={review.id} className={style.reviewItem}>
            <div className={style.reviewItemHeader}>
              <span>{review.user}</span>
              <Rate rate={review.rating} />
            </div>
            <span>{review.text}</span>
          </li>
        )
      })}
    </ul>
  )
}