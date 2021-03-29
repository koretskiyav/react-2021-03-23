import React from 'react';
import Menu from './menu';
import Reviews from './Reviews/Reviews';
import Rate from './Rate/Rate';

export default function Restaurant({ activeRestaurant }) {
  const { menu, reviews } = activeRestaurant;
  const averageRate = reviews.reduce((total, next) => total + next.rating, 0) / reviews.length;

  return (
    <div>
      <Menu menu={menu} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '400px' }}>
        <h2>Average rate:</h2>
        <Rate rate={averageRate} />
      </div>
      <Reviews reviews={reviews} />
    </div>
  )
}