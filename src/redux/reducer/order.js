import { DECREMENT, INCREMENT, REMOVE, CHECKOUT, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  items: {},
  error: null,
};
// { [productId]: amount }
export default (state = initialState, action) => {
  const { type, id, error } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        items: { ...state.items, [id]: (state.items[id] || 0) + 1 }
      };
    case DECREMENT:
      return {
        ...state,
        items: { ...state.items, [id]: state.items[id] > 0 ? (state.items[id] || 0) - 1 : 0 }
      };
    case REMOVE:
      return {
        ...state,
        items: { ...state.items, [id]: 0 }
      };
    case CHECKOUT + REQUEST:
      return {
        ...state,
        error: null
      };
    case CHECKOUT + SUCCESS:
      return {
        ...state,
        items: {}
      };
    case CHECKOUT + FAILURE:
      return {
        ...state,
        error: error
      };
    default:
      return state;
  }
};
