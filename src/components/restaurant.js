import React from 'react';

import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

import style from './restaurant.module.css';

export default function Restaurant(props) {
  const allReviews = props.restaurant.reviews;
  const averageRating =
    allReviews.reduce((total, review) => {
      return total + review.rating;
    }, 0) / allReviews.length;

  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <div className={style.rating}>
        Restaurant rating: <Rate rating={Math.round(averageRating)} />
      </div>
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
