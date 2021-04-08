import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import {
  restIdsSelector,
  restTabs
} from '../../redux/selectors';

const Restaurants = ({ restaurants, tabs }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <div>
      <Tabs
        tabs={tabs}
        activeId={activeRestaurantId}
        onChange={setActiveRestaurant}
      />
      <Restaurant restaurantId={activeRestaurantId} />
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default connect((state) => ({
  restaurants: restIdsSelector(state),
  tabs: restTabs(state)
}))(Restaurants);
