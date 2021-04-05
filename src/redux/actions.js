import { DECREMENT, INCREMENT, DELETE } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const deleteItems = (id) => ({ type: DELETE, id });
