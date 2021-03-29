import React from 'react';
import Menu from './menu';
import Review from './review';

function Restaurant(props){

  const{restaurants} = props;

  const restaurantList = restaurants.map(item =>(
    <div key={item.id}>
      <h1>{item.name}</h1>
      <Menu menu={item.menu} />
      <Review reviews={item.reviews} />
    </div>
  ))

  return(
    <div>
      {restaurantList}
    </div>
  )
}

export default Restaurant