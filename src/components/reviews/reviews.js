import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews } from '../../redux/actions';

const Reviews = ({ reviews, restaurantId, loadReviews }) => {
  useEffect(() => {
    loadReviews(restaurantId);
  }, [loadReviews, restaurantId]);

  return (
    <div className={styles.reviews}>
<<<<<<< HEAD
      {reviews.map((id) => (
        <Review key={id} id={id} />
=======
      {reviews.map((review) => (
        <Review key={review.id} id={review} />
>>>>>>> b5f9bfe384059c9fd0cd8396e07fe7c58a98ab9c
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(null, { loadReviews })(Reviews);
