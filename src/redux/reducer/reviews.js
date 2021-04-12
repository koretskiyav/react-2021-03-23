import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, review, restaurantId, reviewId, userId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft.loading[restaurantId] = true;
      draft.loaded[restaurantId] = false;
      draft.error = null;
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.entities = { ...draft.entities, ...arrToMap(data) };
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      break;
    case LOAD_REVIEWS + FAILURE:
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      {
        const { text, rating } = review;
        draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      }
      break;
    default:
      return draft;
  }

  return draft;
});
