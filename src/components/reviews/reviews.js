import React from 'react';
import Review from '../review';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <div data-id="reviews">
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  )
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string
  })).isRequired
};

export default Reviews;

