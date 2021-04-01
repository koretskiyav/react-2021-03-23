import React from 'react';
import useAverageRate from '../../hooks/use-average-rate';
import Rate from '../rate';
import style from './header.module.css';
import PropTypes from 'prop-types';

const Header = ({ restaurant }) => {
  const averageRate = useAverageRate(restaurant.reviews);

  return (
    <div className={style.container}>
      <div>{restaurant.name}</div>
      <Rate rate={averageRate} />
    </div>
  );
}

Header.propTypes = {
  restaurant: PropTypes.shape({
    reviews: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string
  }).isRequired
}

export default Header;
