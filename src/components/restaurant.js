import React, { useMemo } from 'react';
import Rate from './rate';
import Menu from './menu';
import Reviews from './reviews';

import style from './restaurant.module.css';

function Restaurant(props) {
  const { menu, reviews } = props.restaurant
  const rate = useMemo(
    () => Math.round(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length), 
    [reviews]
  )
  
  return (
    <div className={style.restaurant}>
      <h1 className="flex-between">
        {props.restaurant.name}
        <Rate value={rate}/>
      </h1>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default Restaurant;
