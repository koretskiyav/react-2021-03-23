import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    Object.keys(restaurants)[0]
  );

  const activeRestaurant = useMemo(() => restaurants[activeRestaurantId], [
    activeRestaurantId,
    restaurants,
  ]);

  const tabs = Object.entries(restaurants).map(([id, restaurant]) => ({
    id,
    title: restaurant.name,
  }));

  return (
    <div>
      <Tabs
        tabs={tabs}
        activeId={activeRestaurantId}
        onChange={setActiveRestaurant}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.shape().isRequired,
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
