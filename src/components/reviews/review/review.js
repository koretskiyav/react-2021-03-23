import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { shape } from 'prop-types';

import {
  getReviewsIdSelector,
  getUsersIdSelector,
} from '../../../redux/selectors';
import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ review, users }) => {
  const { rating, text } = review;
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {users.name}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  user: PropTypes.string,
  review: shape({
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }),
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, props) => ({
  review: getReviewsIdSelector(state, props),
  users: getUsersIdSelector(state, props),
}))(Review);
