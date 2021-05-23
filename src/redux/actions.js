import { LOAD_RESTAURANTS, LOAD_PRODUCTS, LOAD_USERS } from './constants';

import { usersLoadingSelector, usersLoadedSelector } from './selectors';

import api from '../api';

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: () => api.loadRestaurants(),
});

export const loadProducts = (restaurantId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: () => api.loadProducts(restaurantId),
  restaurantId,
});

const _loadUsers = () => ({ type: LOAD_USERS, CallAPI: () => api.loadUsers() });

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch(_loadUsers());
};
