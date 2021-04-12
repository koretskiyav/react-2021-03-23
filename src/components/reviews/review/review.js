import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  reviewTextSelector,
  reviewRatingSelector,
  reviewUserSelector,
} from '../../../redux/selectors';

import Rate from '../../rate';
import styles from './review.module.css';
import { reviewWitUserSelector } from '../../../redux/selectors';

const Review = ({ id, user, text, rating }) => {
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user}
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
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

<<<<<<< HEAD
// const mapStateToProps = (state, props) => ({
//   ...reviewWitUserSelector(state, props),
// });

// const mapStateToProps = (state, props) => reviewWitUserSelector(state, props);

const mapStateToProps = reviewWitUserSelector;

export default connect(mapStateToProps)(Review);
=======
export default connect((state, props) => {
  return {
    user: reviewUserSelector(state, props),
    text: reviewTextSelector(state, props),
    rating: reviewRatingSelector(state, props),
  };
})(Review);
>>>>>>> b5f9bfe384059c9fd0cd8396e07fe7c58a98ab9c
