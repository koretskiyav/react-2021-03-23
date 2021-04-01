import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './navigation.module.css';

const Navigation = ({ restaurants, onRestaurantClick }) => (
  <div className={styles.list}>
    {restaurants.map(({ id, name }) => (
      <span
        key={id}
        className={styles.restaurant}
        onClick={() => onRestaurantClick(id)}
      >
        {name}
      </span>
    ))}
  </div>
);

Navigation.propTypes = {
  onRestaurantClick: PropTypes.func.isRequired,
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          ingredients: PropTypes.arrayOf(PropTypes.string),
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        })
      ).isRequired,
      name: PropTypes.string.isRequired,
      reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          user: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};

export default Navigation;
