import produce from 'immer';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      if (!restaurantId) return state;
      return produce(state, (draft) => {
        draft.loading[restaurantId] = true;
        draft.loaded[restaurantId] = false;
        draft.error = null;
      });
    case LOAD_PRODUCTS + SUCCESS:
      if (!restaurantId) return state;
      return produce(state, (draft) => {
        draft.entities = { ...draft.entities, ...arrToMap(data) };
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = true;
      });
    case LOAD_PRODUCTS + FAILURE:
      if (!restaurantId) return state;
      return produce(state, (draft) => {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = false;
        draft.error = error;
      });
    default:
      return state;
  }
};
