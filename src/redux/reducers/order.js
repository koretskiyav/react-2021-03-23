import { DECREMENT, INCREMENT, DELETE_POSITION } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case DELETE_POSITION:
      return { ...state, [id]: 0 }
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
