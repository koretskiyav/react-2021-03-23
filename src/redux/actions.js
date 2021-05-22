import { replace } from 'connected-react-router';
import {
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_PRODUCTS,
  LOAD_REVIEWS,
  LOAD_USERS,
} from './constants';

import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
} from './selectors';

import api from '../api';

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  review,
  restaurantId,
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: () => api.loadRestaurants(),
});

export const loadProducts = (restaurantId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: () => api.loadProducts(restaurantId),
  restaurantId,
});

const _loadReviews = (restaurantId) => ({
  type: LOAD_REVIEWS,
  CallAPI: () => api.loadReviews(restaurantId),
  restaurantId,
});

const _loadUsers = () => ({ type: LOAD_USERS, CallAPI: () => api.loadUsers() });

export const loadReviews = (restaurantId) => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restaurantId });
  const loaded = reviewsLoadedSelector(state, { restaurantId });

  if (loading || loaded) return;

  try {
    await dispatch(_loadReviews(restaurantId));
  } catch {
    dispatch(replace('/error'));
  }
};

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch(_loadUsers());
};
