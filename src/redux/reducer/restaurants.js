import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, restaurantId, reviewId, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_RESTAURANTS + SUCCESS:
      draft.entities = arrToMap(data);
      draft.loading = false;
      draft.loaded = true;
      break;
    case LOAD_RESTAURANTS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      draft.entities[restaurantId].reviews.push(reviewId);
      break;
    default:
      return draft;
  }
  return draft;
});
