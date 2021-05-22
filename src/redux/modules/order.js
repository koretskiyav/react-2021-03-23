import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('order/increment');
export const decrement = createAction('order/decrement');
export const remove = createAction('order/remove');
