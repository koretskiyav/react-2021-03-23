import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  const rateSum = (array) => {
    return array.reduce((sum, arrayItem) => sum + arrayItem.rating, 0);
  };

  const averageRate =
    Math.round(
      (rateSum(props.activeRestaurant.reviews) /
        props.activeRestaurant.reviews.length) *
        10
    ) / 10;
  console.log(averageRate);
  return (
    <div>
      <Menu menu={props.activeRestaurant.menu} />
      <Reviews reviews={props.activeRestaurant.reviews} />
      <Rate averageRate={averageRate} />
    </div>
  );
}
