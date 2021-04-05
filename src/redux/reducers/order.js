import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] && state[id] > 0) ? (state[id] - 1) : 0 };
    case REMOVE:
      return { ...state, [id]: 0 }
    default:
      return state;
  }
};
