import {
  DECREMENT,
  INCREMENT,
  ORDER_PROCESS,
  REMOVE,
  SUCCESS,
} from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id, data } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: state[id] > 0 ? (state[id] || 0) - 1 : 0 };
    case REMOVE:
      return { ...state, [id]: 0 };
    case ORDER_PROCESS + SUCCESS:
      return 'ok' === data ? {} : state;
    default:
      return state;
  }
};
