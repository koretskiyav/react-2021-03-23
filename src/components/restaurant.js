import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

function Restaurant(props) {
  const { menu, reviews } = props.restaurant;
  return (
    <div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <div>
        <hr />
        Средний рейтинг: <Rate rating={reviews} />
      </div>
    </div>
  );
}
export default Restaurant;
