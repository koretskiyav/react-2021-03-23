import produce from 'immer';
import { arrToMap } from '../utils';
import {
  LOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null
};

export default produce((draft = initialState, action) => {
  const { type, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      draft.loading[restaurantId] = true;
      draft.error = null;
      break;
    case LOAD_PRODUCTS + SUCCESS:
      draft.entities = Object.assign(draft.entities, arrToMap(data));
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      break;
    case LOAD_PRODUCTS + FAILURE:
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});
