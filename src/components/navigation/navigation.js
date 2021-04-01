import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ restaurants, onRestaurantClick }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => onRestaurantClick(restaurant.id)}>
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};

Navigation.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string
  })).isRequired,
  onRestaurantClick: PropTypes.func.isRequired
}

export default Navigation;
