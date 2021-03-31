import React from 'react';
import Menu from './menu';
import Review from '../Review/review';

function Restaurant(props){
  const{restaurant} = props;
  
  const {reviews} = restaurant;
  const allRatings = reviews.map(el=>el.rating)
  const average= (allRatings.reduce((a, b) => (a + b)) / allRatings.length).toFixed(1);

  return(
    <div>
       <div key={restaurant.id}>
        <h1>{restaurant.name}</h1>
        <h2>{average? `Average rating:${average}`: `Not rated yet`}</h2>
        <Menu menu={restaurant.menu} />
        <Review reviews={restaurant.reviews} />
        </div>
    </div>
  )
}

export default Restaurant