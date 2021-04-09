import React from 'react';
import PropTypes from 'prop-types';

import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviewId }) => (
  <div className={styles.reviews}>
    {reviewId.map((reviewId) => (
      <Review key={reviewId} reviewId={reviewId} />
    ))}
    <ReviewForm />
  </div>
);

Reviews.propTypes = {
  reviewsId: PropTypes.arrayOf(PropTypes.string),
};

export default Reviews;
