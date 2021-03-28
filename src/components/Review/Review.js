import React from 'react';
import Rate from '../Rate/Rate';
import styles from './Review.module.css';

export default function Review(props) {
  const { review } = props;
  const { user, text, rating } = review;
  return (
    <article className={styles.item}>
      <section className='review-item-header'>
        <h3>{user}</h3>
        <p>Rating: <Rate value={rating}/></p>
      </section>
      <section className="review-item-body">
        <p>{text}</p>
      </section>
    </article>
  )
}