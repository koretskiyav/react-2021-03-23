import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW_AND_USER,
  SET_ACTIVE_RESTAURANT,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const addReviewAndUser = (name, text, rating) => ({
  type: ADD_REVIEW_AND_USER,
  payload: { name, text, rating },
});
export const setActiveRestaurant = (id) => ({
  type: SET_ACTIVE_RESTAURANT,
  id,
});
