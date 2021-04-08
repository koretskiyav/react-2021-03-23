import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { connect } from 'react-redux';

const Reviews = ({ reviews, reviewsRedux, restaurant }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review} {...reviewsRedux[review]} />
      ))}
      <ReviewForm restaurant={restaurant} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  reviewsRedux: state.reviews,
});

export default connect(mapStateToProps)(Reviews);
