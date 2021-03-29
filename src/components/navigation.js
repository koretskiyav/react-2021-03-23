import React from 'react';
import { Rate } from './rate';

export default function Navigation(props) {
  const findRate = (arr) => {
    let rate = 0;
    arr.forEach((item) => {
      rate += item.rating;
    });
    return Math.floor(rate / arr.length);
  };

  return (
    <div>
      {props.restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}

          <Rate value={findRate(restaurant.reviews)} />
        </button>
      ))}
    </div>
  );
}
