import React, { useState } from 'react';
import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';
import useAverageRate from '../hooks/use-average-rate';
import style from './restaurant.module.css';

export default function Restaurant(props) {
  const averageRate = useAverageRate(props.restaurant.reviews);

  return (
    <div className={style.container}>
      <Menu menu={props.restaurant.menu} />
      <div>
        <div className={style.column}>
          <h3>Average rate:</h3>
          <Rate rate={averageRate.averageRate} backgroundColor="#fff" />
        </div>
        <Reviews reviews={props.restaurant.reviews} />
      </div>
    </div>
  )
}
