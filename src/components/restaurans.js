import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = props.restaurants.find(
    (restaurant) => restaurant.id === activeId
  );
  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantsClick={setActiveId}
      />
      <Menu menu={activeRestaurant.menu}></Menu>
    </div>
  );
}
