import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: {amount, restaurantId} }
export default (state = {}, action) => {
  const { type, id, restaurantId } = action;

  const product = state[id] || { restaurantId };

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [id]: {
          ...product,
          amount: (product.amount || 0) + 1,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [id]: {
          ...product,
          amount: (product.amount || 0) > 0 ? (product.amount || 0) - 1 : 0,
        },
      };
    case REMOVE:
      return { ...state, [id]: {} };
    default:
      return state;
  }
};
