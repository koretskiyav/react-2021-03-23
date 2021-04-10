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

export default (state = initialState, action) => {
  const { type, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: { ...state.loading, [restaurantId]: true },
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...arrToMap(data) },
        loading: { ...state.loading, [restaurantId]: false },
        loaded: { ...state.loaded, [restaurantId]: true },
      }
      break;
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: { ...state.loading, [restaurantId]: false },
        loaded: { ...state.loaded, [restaurantId]: false },
        error: error,
      }
    default:
      return state;
  }
};
