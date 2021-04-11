import produce from 'immer';
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

export default produce((draft = initialState, action) => {
  const { type, review, reviewId, userId, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft.loading[restaurantId] = true;
      draft.error = null
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.entities = Object.assign(draft.entities, arrToMap(data));
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      break;
    case LOAD_REVIEWS + FAILURE:
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      const { text, rating } = review;

      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
    default:
      return draft;
  }
});
