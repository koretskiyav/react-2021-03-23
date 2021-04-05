import { DECREMENT, INCREMENT, DELETE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      if (state[id] > 0) {
        return { ...state, [id]: (state[id] || 0) - 1 };
      } else {
        return { ...state, [id]: (state[id] = 0) };
      }
    case DELETE:
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
