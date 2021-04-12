import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  revLoading,
  revLoaded,
  usrLoading,
  usrLoaded,
}) => {
  useEffect(() => {
    if (!revLoading && !revLoaded) loadReviews(restaurantId);
  }, [loadReviews, restaurantId, revLoaded, revLoading]);

  useEffect(() => {
    if (!usrLoading && !usrLoaded) loadUsers();
  }, [loadUsers, restaurantId, usrLoaded, usrLoading]);

  return (
    <div className={styles.reviews}>
      {!revLoading && revLoaded && !usrLoading && usrLoaded ? (
        reviews.map((id) => <Review key={id} id={id} />)
      ) : (
        <Loader />
      )}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
  revLoading: reviewsLoadingSelector(state, props),
  revLoaded: reviewsLoadedSelector(state, props),
  usrLoading: usersLoadingSelector(state),
  usrLoaded: usersLoadedSelector(state),
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
