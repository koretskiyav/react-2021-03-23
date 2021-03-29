import React from 'react';

import Menu from '../menu';
import Reviews from '../reviews/reviews';
import Rate from '../rate/rate';

import styles from './restaurant.module.css';

export default function Restaurant(props) {
  const { restaurant } = props;
  const ratings = restaurant.reviews.map((r) => r.rating);
  const density = 0.01;
  const avgRating =
    Math.floor(
      ratings.reduce((acc, v) => acc + v, 0) / ratings.length / density
    ) * density;
  return (
    <div classNames={styles.restaurant}>
      <h2 classNames={styles.restaurant__title}>
        {restaurant.name}
        <Rate value={avgRating} className={styles.restaurant__avgrate} />
      </h2>
      {/* <div classNames={styles.restaurant__avgrate}>
        <Rate value={avgRating} />
        {JSON.stringify(restaurant.reviews)} <br />
        avgRating = {avgRating}
      </div> */}
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
