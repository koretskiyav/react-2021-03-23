import React from 'react';
import Rate from '../rate';
import style from './review.module.css';
import PropTypes from 'prop-types';

const Review = ({ review }) => {
  return (
    <div className={style.container}>
      <div>
        <h3>{review.user}</h3>
        <div>{review.text}</div>
      </div>
      <Rate rate={review.rating} />
    </div>
  )
}

Review.prototypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number
  }).isRequired
}

export default Review;
