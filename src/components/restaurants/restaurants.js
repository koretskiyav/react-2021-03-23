import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(Object.keys(restaurants)[0]);

  // const activeRestaurant = restaurants[activeRestaurantId];
    // useMemo(
    // () => restaurants.find(({ id }) => id === activeRestaurantId),
    // [activeRestaurantId, restaurants]
  // );

  // const tabs = restaurants.map(({ id, name }) => ({ id, title: name }));
  const tabs = useMemo(
    () => Object.values(restaurants).map(({ id, name }) => ({ id, title: name })),
    [restaurants]
  );


  return (
    <div>
      <Tabs
        tabs={tabs}
        activeId={activeRestaurantId}
        onChange={setActiveRestaurant}
      />
      <Restaurant restaurant={restaurants[activeRestaurantId]} />
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
