
import { arrToMap } from '../utils';
import {
  REQUEST,
  ADD_REVIEW,
  SUCCESS,
  LOAD_REVIEWS,
  FAILURE,
} from '../constants';
import produce from "immer";

const initState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};
export default produce((state = initState, action) => {
  const {reviewId, payload, type, error, userId, data} = action;

  switch (type) {
    case ADD_REVIEW:
      const {text,rating} = payload.review;
     return {
       ...state,
       [reviewId]:{id:reviewId,userId,text,rating},
     };
    default:
      return state;

    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          ...arrToMap(data)
        },
        loading: false,
        loaded: true,
      };

    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
  }
});