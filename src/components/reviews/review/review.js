import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ review, user }) => {
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user.name}
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
};

Review.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string,
    comment: PropTypes.string,
    rating: PropTypes.number,
  }),
  amount: PropTypes.object,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, props) => {
  const review = state.reviews[props.id];
  return {
    review: review,
    user: state.users[review.userId] || 'Anonymous',
  };
};

export default connect(mapStateToProps)(Review);
