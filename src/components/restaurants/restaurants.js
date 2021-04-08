import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import {
  restIdsSelector,
  restTabs
} from '../../redux/selectors';

const Restaurants = ({ restaurants, restIds, tabs }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restIds[0]);

  const activeRestaurant = useMemo(
    () => restaurants[activeRestaurantId],
    [activeRestaurantId, restaurants]
  );

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
  restaurants: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default connect((state) => ({
  restaurants: state.restaurants,
  restIds: restIdsSelector(state),
  tabs: restTabs(state)
}))(Restaurants);
