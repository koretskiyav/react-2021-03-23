import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant (props) {
  let totalRating = 0;
  props.restaurant.reviews.map((review) =>(
    totalRating += review.rating
  ));
  let avgRating = totalRating/props.restaurant.reviews.length;
  avgRating = Math.floor(avgRating * 10) / 10
  return(
    <div>
      <Rate value={avgRating}/>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews}/>
    </div>
  );
}