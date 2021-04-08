import { DECREMENT, INCREMENT, REMOVE, REVIEW_SUBMIT } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const onSubmit = (review) => ({ type: REVIEW_SUBMIT, review });
