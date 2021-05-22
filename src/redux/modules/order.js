import { createSlice } from '@reduxjs/toolkit';

import { MAKE_ORDER, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

const { reducer, actions } = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increment: (state, { payload: id }) => {
      state.entities[id] = (state.entities[id] || 0) + 1;
    },
    decrement: (state, { payload: id }) => {
      state.entities[id] =
        state.entities[id] > 0 ? (state.entities[id] || 0) - 1 : 0;
    },
    remove: (state, { payload: id }) => {
      state.entities[id] = 0;
    },
  },
  extraReducers: {
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
  },
});

const { increment, decrement, remove } = actions;

export default reducer;
export { increment, decrement, remove };
