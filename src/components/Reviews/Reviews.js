import React from 'react';
import Review from '../Review/Review';
import styles from './Reviews.module.css';

export default function Reviews(props) {
  const { reviews } = props;
  return (
    <section>
      <h2>Reviews</h2>
      <div className={styles.wrapper}>
        {
          reviews.map(review => (
            <Review review={review} key={review.id} />
          ))
        }
      </div>

    </section>
  )
}