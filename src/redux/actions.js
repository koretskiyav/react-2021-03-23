import { DECREMENT, INCREMENT, DISCARD } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const discard = (id) => ({ type: DISCARD, id });
