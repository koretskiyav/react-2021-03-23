import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const rest = Object.keys(restaurants);

  const [activeRestaurant, setActiveRestaurant] = useState(
    restaurants[rest[0]]
  );

  const tabs = rest.map((id) => ({ id, title: restaurants[id].name }));

  function setSetActiveRestaurantId(activeRestaurantId) {
    setActiveRestaurant(restaurants[activeRestaurantId]);
  }

  return (
    <div>
      <Tabs
        tabs={tabs}
        activeId={activeRestaurant.id}
        onChange={setSetActiveRestaurantId}
      />
      <Restaurant restaurant={activeRestaurant} />
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
