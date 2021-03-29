import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  return(
    <div>
      <Reviews reviews={props.reviews} />
      <Menu menu={props.menu} />
    </div>
  );
}
