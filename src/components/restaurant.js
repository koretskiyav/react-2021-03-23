import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

import style from './restaurant.module.css';

import { ReactComponent as Star } from '../icons/star.svg';

export default function Restuarant(props) {
  const restaurant = props.restaurant;

  return (
    <div className={style.block}>
      <div>
        {restaurant.name}{' '}
        <span className={style.rating}>
          {' '}
          <Star className={style.icon} />
          {restaurant.averagerating}
        </span>
      </div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
