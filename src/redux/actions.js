import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_USER,
  ADD_REVIEW
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const addUser = (id) => ({ type: ADD_USER, id });

export const addReview = (payload) => ({ type: ADD_REVIEW, payload });
