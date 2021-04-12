<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> b5f9bfe384059c9fd0cd8396e07fe7c58a98ab9c
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

<<<<<<< HEAD
const Restaurants = ({ restaurants, loading, loaded, loadRestaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    restaurants[0]?.id
  );

  const activeId = activeRestaurantId || restaurants[0]?.id;

  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loadRestaurants, loading, loaded]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  const tabs = restaurants.map(({ id, name }) => ({ id, title: name }));
=======
const Restaurants = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    Object.keys(restaurants)[0]
  );

  const activeRestaurant = restaurants[activeRestaurantId];

  const tabs = Object.values(restaurants).map(({ id, name }) => ({
    id,
    title: name,
  }));
>>>>>>> b5f9bfe384059c9fd0cd8396e07fe7c58a98ab9c

  return (
    <div>
      <Tabs tabs={tabs} activeId={activeId} onChange={setActiveRestaurant} />
      <Restaurant id={activeId} />
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

const mapStateToProps = (state) => ({
  restaurants: restaurantsListSelector(state),
  loading: restaurantsLoadingSelector(state),
  loaded: restaurantsLoadedSelector(state),
});

export default connect(mapStateToProps, { loadRestaurants })(Restaurants);
