import produce from 'immer';
import { LOAD_RESTAURANTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { addReview } from '../modules/reviews';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_RESTAURANTS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_RESTAURANTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case addReview.type:
      return produce(state, (draft) => {
        draft.entities[action.payload.restaurantId].reviews.push(
          action.meta.reviewId
        );
      });
    default:
      return state;
  }
};
