import { DECREMENT, INCREMENT } from '../constants';

// { [productId]: { name, amount, totalForProduct }, total }
export default (state = {}, action) => {
  const { type, id, name, price } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, [id]: { 
        name: name || '', 
        amount: state[id] ? state[id].amount + 1 : 1, 
        totalForProduct: state[id] ? state[id].totalForProduct + price : price },
        total: (state.total || 0) + price 
      };
    case DECREMENT:
      return { ...state, [id]: { 
        name: name, 
        amount: state[id] ? state[id].amount - 1 : 0, 
        totalForProduct: state[id] ? state[id].totalForProduct - price : 0 },
        total: (state.total || 0) - price
     };
    default:
      return state;
  }
};
