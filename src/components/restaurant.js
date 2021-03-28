import React from 'react';
import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';
import useAverageRate from '../hooks/use-average-rate';
import style from './restaurant.module.css';

export default function Restaurant(props) {
  const averageRate = useAverageRate(props.restaurant.reviews);

  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
      <Rate rate={averageRate.averageRate} />
    </div>
  )
}
