import React, { useState, useMemo } from 'react';
import Navigation from '../navigation';
import Restaurant from '../restaurant';
import Header from '../header';
import PropTypes from 'prop-types';

const Restaurants = ({ restaurants }) => {
  const [activeId, setActiveId] = useState(restaurants[0].id);
  console.log(restaurants[0].reviews[0]);

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={setActiveId} />
      <Header restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} key={activeRestaurant.id} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })).isRequired
}

export default Restaurants;
