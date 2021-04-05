import { DECREMENT, INCREMENT, DELETE_POSITION } from './constants';

export const increment = (id, name, price) => ({ type: INCREMENT, id, name, price });
export const decrement = (id, name, price) => ({ type: DECREMENT, id, name, price });
export const deletePosition = (id) => ({ type: DELETE_POSITION, id });
