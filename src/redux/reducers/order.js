import { DECREMENT, INCREMENT, CLEAR } from '../constants';

export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] ? (state[id] - 1) : 0)};
    case CLEAR:
      return { ...state, [id]: 0 };
    default:
      return state;
  }
};
