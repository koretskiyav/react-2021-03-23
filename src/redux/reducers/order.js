import { DECREMENT, DELETE, INCREMENT } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id,order } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      if (state[id] > 0){
        return { ...state, [id]: (state[id] || 0) - 1 };
      } else {
        return state;
      }
    case DELETE:
        return {...state, order};
    default:
      return state;
  }
};
