import React, { useMemo } from 'react';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import PropTypes from 'prop-types';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.restaurant}>
        <Menu menu={menu} key={restaurant.id} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};
Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};
export default Restaurant;
