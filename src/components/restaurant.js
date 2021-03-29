import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  const restaurant = props.restaurant;
  return (
    <div className="profile">
      <Reviews reviews={restaurant.reviews} />
      <Menu menu={restaurant.menu} />
    </div>
  );
}
