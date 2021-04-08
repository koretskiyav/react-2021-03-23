import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reviewUserSelector, singleReviewSelector} from "../../../redux/selectors";

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({review, user}) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user.name || 'Anonymous'}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {review.text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={review.rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  id: PropTypes.string.isRequired,
};

export default connect((state, props) => {
  return {
    review: singleReviewSelector(state, props),
    user: reviewUserSelector(state, props),
  }
})(Review);
