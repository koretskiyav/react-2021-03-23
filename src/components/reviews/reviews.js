import React from 'react';
import { PropTypes } from 'prop-types';

import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews }) => (
  <div className={styles.reviews}>
    {reviews.map((review) => (
      <Review key={review.id} {...review} />
    ))}
  </div>
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
