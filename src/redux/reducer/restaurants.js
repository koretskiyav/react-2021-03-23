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

export default (state = initialState, action) => {
  const { type, restaurantId, reviewId, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = null;
      });
    case LOAD_RESTAURANTS + SUCCESS:
      return produce(state, (draft) => {
        draft.entities = arrToMap(data);
        draft.loading = false;
        draft.loaded = true;
      });
    case LOAD_RESTAURANTS + FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.loaded = false;
        draft.error = error;
      });
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[restaurantId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};
