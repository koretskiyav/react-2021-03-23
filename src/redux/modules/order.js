import { push } from 'connected-react-router';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import { orderDataSelector } from '../selectors';
import { status } from '../constants';

const initialState = {
  status: status.idle,
  error: null,
  entities: {},
};

export const addOrder = createAsyncThunk(
  'order/add',
  async (_, { dispatch, getState }) => {
    const order = orderDataSelector(getState());

    try {
      await api.addOrder(order);
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
    [addOrder.pending]: (state) => {
      state.status = status.pending;
      state.error = null;
    },
    [addOrder.fulfilled]: (state) => {
      state.status = status.fulfilled;
      state.entities = {};
    },
    [addOrder.rejected]: (state, action) => {
      state.status = status.rejected;
      state.error = action.error.message;
    },
  },
});

const { increment, decrement, remove } = actions;

export default reducer;
export { increment, decrement, remove };
