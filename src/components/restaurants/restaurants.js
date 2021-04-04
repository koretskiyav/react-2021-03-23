import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Navigation from '../navigation';
import Basket from '../basket';

import { ReactComponent as BasketBtn } from 'icons/basket.svg';

import styles from './restaurants.module.css';

const Restaurants = ({ restaurants, products }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);
  const [activeComponent, setActiveComponent] = useState('restaurants');

  const activeRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === activeRestaurantId),
    [activeRestaurantId, restaurants]
  );

  return (
    <div>
      <div onClick={() => setActiveComponent('restaurants')}>
        <Navigation
          restaurants={restaurants}
          onRestaurantClick={setActiveRestaurant}
        />
      </div>
      <span className={styles['basket-button']} onClick={() => setActiveComponent('basket')}>
        <BasketBtn />
      </span>
      {
        activeComponent === 'restaurants' 
          ? <Restaurant restaurant={activeRestaurant} />
          : <Basket products={products} />
      }
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Restaurants;
