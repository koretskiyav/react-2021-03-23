import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

import styles from './restaurants.module.css';

const Restaurants = ({
  restaurants,
  loading,
  loaded,
  loadRestaurants,
  match,
}) => {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loadRestaurants, loading, loaded]);
  const { restId, subTab } = match.params;
  const subPath = useMemo(() => (subTab ? `/${subTab}` : ''), [subTab]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div>
      <div className={styles.tabs}>
        {restaurants.map(({ id, name }) => (
          <NavLink
            key={id}
            to={`/restaurants/${id}` + subPath}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {name}
          </NavLink>
        ))}
      </div>
      {restId ? (
        <Restaurant id={restId} />
      ) : (
        <p style={{ textAlign: 'center' }}>Select restaurant</p>
      )}
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
