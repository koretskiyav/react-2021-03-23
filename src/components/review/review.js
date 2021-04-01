import React from 'react';
import Rate from '../rate';
import style from './review.module.css';
import PropTypes from 'prop-types';

const Review = ({ user, text, rating }) => {
  return (
    <div className={style.container} data-id="review">
      <div>
        <h3>{user}</h3>
        <div>{text}</div>
      </div>
      <Rate rate={rating} />
    </div>
  )
}

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number
}

Review.defaultProps = {
  user: 'Anonymous'
}

export default Review;
