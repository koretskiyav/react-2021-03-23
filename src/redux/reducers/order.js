import { DECREMENT, INCREMENT } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    default:
      return state;
  }
};

// const getById = (state, action) => {
//   const { type, id } = action;

//   switch(type) {

//   }
// }

// const setById = (state, action) => {
//   const { type, id } = action;

//   switch(type) {
    
//   }
// }
