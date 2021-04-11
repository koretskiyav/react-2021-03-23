import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
}

export default (state = initialState, action) => {
  const { type, review, reviewId, userId, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: { ...state.loading, [restaurantId]: true },
        error: null,
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...arrToMap(data) },
        loading: { ...state.loading, [restaurantId]: false },
        loaded: { ...state.loaded, [restaurantId]: true },
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: { ...state.loading, [restaurantId]: false },
        loaded: { ...state.loaded, [restaurantId]: false },
        error: error,
      };
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        entities: { ...state.entities, [reviewId]: { id: reviewId, userId, text, rating } },
      };
    default:
      return state;
  }
};
