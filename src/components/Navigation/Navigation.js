import React from 'react';
import styles from './Navigation.module.css';

export default function Navigation(props) {
  return (
    <nav>
      {props.restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
          className={styles.navBtn}
        >
          {restaurant.name}
        </button>
      ))}
    </nav>
  );
}
