import { replace } from 'connected-react-router';
import history from '../history';
import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_PRODUCTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  ORDER_PROCESS,
  REQUEST,
  SUCCESS,
} from './constants';

import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  orderIsProcessingSelector,
} from './selectors';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  review,
  restaurantId,
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadProducts = (restaurantId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${restaurantId}`,
  restaurantId,
});

const _loadReviews = (restaurantId) => ({
  type: LOAD_REVIEWS,
  CallAPI: `/api/reviews?id=${restaurantId}`,
  restaurantId,
});

const _loadUsers = () => ({ type: LOAD_USERS, CallAPI: '/api/users' });

export const loadReviews = (restaurantId) => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restaurantId });
  const loaded = reviewsLoadedSelector(state, { restaurantId });

  if (loading || loaded) return;

  dispatch(_loadReviews(restaurantId)).catch(() => {
    dispatch(replace('/error'));
  });
};

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch(_loadUsers());
};

export const orderProcessStart = (orderData) => async (dispatch, getState) => {
  console.log('orderProcessStart');
  const state = getState();
  const processing = orderIsProcessingSelector(state);
  console.log('processing', processing);

  if (processing) return;

  dispatch({ type: ORDER_PROCESS + REQUEST });
  fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      dispatch({ type: ORDER_PROCESS + SUCCESS, data: result });
      console.log('orderProcessEnd is called...');
      history.push('ok' === result ? '/done' : '/error');
    });
};
