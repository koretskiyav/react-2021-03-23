import React, { useMemo } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { setActiveRestaurant } from '../../redux/actions';

const Restaurants = ({ restaurants, activeRestaurantId }) => {
  const dispatch = useDispatch();

  const activeRestaurant = useMemo(() => restaurants[activeRestaurantId], [
    activeRestaurantId,
    restaurants,
  ]);

  const tabs = Object.keys(restaurants).map((key) => ({
    id: restaurants[key].id,
    title: restaurants[key].name,
  }));

  const setActive = (id) => dispatch(setActiveRestaurant(id));

  return (
    <div>
      <Tabs tabs={tabs} activeId={activeRestaurantId} onChange={setActive} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.shape(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: state.restaurants,
  activeRestaurantId: state.restaurants.active,
}))(Restaurants);
