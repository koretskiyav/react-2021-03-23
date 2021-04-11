import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import Loader from '../loader';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  usersLoadingSelector,
  usersLoadedSelector,
  restaurantReviewsLoadingSelector,
  restaurantReviewsLoadedSelector,
} from '../../redux/selectors';

const Reviews = ({
  reviews,
  restaurantId,
  reviewsLoading,
  reviewsLoaded,
  usersLoading,
  usersLoaded,
  loadReviews,
  loadUsers }) => {

  useEffect(() => {
    if (!reviewsLoading && !reviewsLoaded) loadReviews(restaurantId);
  }, [loadReviews, reviewsLoading, reviewsLoaded, restaurantId]);

  useEffect(() => {
    if (!usersLoading && !usersLoaded) loadUsers();
  }, [loadUsers, usersLoading, usersLoaded]);

  if (reviewsLoading || usersLoading) return <Loader />;
  if (!reviewsLoaded || !usersLoaded) return 'No data :(';

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
  reviewsLoading: restaurantReviewsLoadingSelector(state, props),
  reviewsLoaded: restaurantReviewsLoadedSelector(state, props),
  usersLoading: usersLoadingSelector(state),
  usersLoaded: usersLoadedSelector(state),
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
