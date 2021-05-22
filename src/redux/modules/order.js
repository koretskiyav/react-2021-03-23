import { push } from 'connected-react-router';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import { orderDataSelector } from '../selectors';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

export const makeOrder = createAsyncThunk(
  'makeOrder',
  async (_, { dispatch, getState }) => {
    const order = orderDataSelector(getState());

    try {
      await api.makeOrder(order);
      dispatch(push('/order-success'));
    } catch (err) {
      dispatch(push('/order-error'));
      throw err;
    }
  }
);

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
    [makeOrder.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [makeOrder.fulfilled]: (state) => {
      state.loading = false;
      state.loaded = true;
      state.entities = {};
    },
    [makeOrder.rejected]: (state, action) => {
      state.loading = false;
      state.loaded = false;
      state.error = action.error.message;
    },
  },
});

const { increment, decrement, remove } = actions;

export default reducer;
export { increment, decrement, remove };
