import { DECREMENT, INCREMENT, CLEAR } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: state[id] > 0 ? state[id] - 1 : 0 };
    case CLEAR:
      return Object.keys(state).reduce((object, key) => {
        if (key !== id) {
          object[key] = state[key];
        }
        return object;
      }, {});
    default:
      return state;
  }
};
