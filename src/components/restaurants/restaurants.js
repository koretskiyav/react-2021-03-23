import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Navigation from '../navigation';
import Basket from '../basket';
import styles from './restaurants.module.css';

const Restaurants = ({ restaurants, order, isOpen, setIsOpen }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === activeRestaurantId),
    [activeRestaurantId, restaurants]
  );

  const activeMenu = useMemo(
    () =>
      restaurants.flatMap((restaurant) =>
        restaurant.menu.filter((element) => {
          return Object.keys(order).includes(element.id);
        })
      ),
    [restaurants, order]
  );

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      {isOpen && <Basket activeMenu={[...activeMenu]} order={order} />}
      {isOpen && <div className={styles.backdrop} onClick={setIsOpen} />}
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
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  order: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default Restaurants;
