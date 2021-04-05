import { DECREMENT, INCREMENT, DELETE_POSITION } from '../constants';

// { {products: [productId]: { name, amount, totalForProduct } }, total }
export default (state = {}, action) => {
  const { type, id, name, price } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, 
        products: { ...state.products,
          [id]: { 
            name: name || '', 
            amount: state[id] ? state[id].amount + 1 : 1, 
            totalForProduct: state[id] ? state[id].totalForProduct + price : price } 
        },
        total: (state.total || 0) + price 
      };
    case DECREMENT:
      return { ...state, 
        products: { ...state.products,
          [id]: { 
            name: name, 
            amount: state[id] ? state[id].amount - 1 : 0, 
            totalForProduct: state[id] ? state[id].totalForProduct - price : 0 }
        },
        total: (state.total || 0) - price
     };
    case DELETE_POSITION:
      let result = Object.assign({}, state);
      result.total = state.total - state.products[id].totalForProduct
      delete result.products[id];
      return result;
    default:
      return state;
  }
};
