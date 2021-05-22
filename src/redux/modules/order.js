import { createAction, createReducer } from '@reduxjs/toolkit';

import { MAKE_ORDER, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

export const increment = createAction('order/increment');
export const decrement = createAction('order/decrement');
export const remove = createAction('order/remove');

export default createReducer(initialState, {
  [increment]: (state, { payload: id }) => {
    state.entities[id] = (state.entities[id] || 0) + 1;
  },
  [decrement]: (state, { payload: id }) => {
    state.entities[id] =
      state.entities[id] > 0 ? (state.entities[id] || 0) - 1 : 0;
  },
  [remove]: (state, { payload: id }) => {
    state.entities[id] = 0;
  },
  [MAKE_ORDER + REQUEST]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [MAKE_ORDER + SUCCESS]: (state) => {
    state.loading = false;
    state.loaded = true;
    state.entities = {};
  },
  [MAKE_ORDER + FAILURE]: (state, action) => {
    state.loading = false;
    state.loaded = false;
    state.error = action.error;
  },
});
