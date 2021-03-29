import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import style from './restaurant.module.css';

export const Restaurant = (props) => {
  return (
    <div className={style.restaurant}>
      <Menu menu={props.restaurant.menu}>Menu</Menu>
      <Reviews reviews={props.restaurant.reviews}>Reviews</Reviews>
    </div>
  );
};
