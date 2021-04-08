import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { connect } from 'react-redux';
import { fullReviewsSelector} from '../../redux/selectors';

const Reviews = ({ reviews }) => {
  console.log(fullReviewsSelector(reviews));
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
      <ReviewForm />
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

export default connect((state) => {
  return {
    reviews: fullReviewsSelector(state),
  };
})(Reviews);
