import React from 'react';
import { PropTypes } from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => (
  <div data-id="review" className={styles.review}>
    <div className={styles.content}>
      <div>
        <h4 data-id="review-user" className={styles.name}>
          {user}
        </h4>
        <p data-id="review-text" className={styles.comment}>
          {text}
        </p>
      </div>
      <div data-id="review-rating" className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  user: PropTypes.string,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default Review;
