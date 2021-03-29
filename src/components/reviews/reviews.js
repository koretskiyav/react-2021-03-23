import React from 'react';

import Rate from '../rate/rate';

import styles from './reviews.module.css';

export default function Reviews(props) {
  const { reviews } = props;
  return (
    <div className={styles.reviews}>
      <h3 className={styles.reviews__title}>Reviews:</h3>
      {reviews.map((v, i) => (
        <div key={i} className={styles.reviews__item}>
          <div className={styles.reviews__item_name}>{v.user}:</div>
          <div className={styles.reviews__item_text}>{v.text}</div>
          <div className={styles.reviews__item_rate}>
            <Rate value={v.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}
