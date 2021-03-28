import React from 'react';
import Menu from '../Menu/Menu';
import Rate from '../Rate/Rate';
import Reviews from '../Reviews/Reviews';

export default function Restaurant(props) {
  const { restaurant } = props;
  const { reviews, menu } = restaurant;
  let totalRate = 0;
  reviews.forEach((item) => totalRate += item.rating);
  const averageRate = (totalRate / reviews.length).toFixed(2);
  return (
    <section>
      <div>
        <p>Average rating: <Rate value={averageRate}/></p>
      </div>
      <Reviews reviews={reviews}/>
      <Menu menu={menu}/>
    </section>
  )
}