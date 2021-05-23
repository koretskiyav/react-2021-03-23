import {
  createAction,
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import api from '../../api';

import { reviewsLoadedSelector, reviewsLoadingSelector } from '../selectors';

const Reviews = createEntityAdapter();

const initialState = {
  ...Reviews.getInitialState(),
  loading: {},
  loaded: {},
  error: null,
};

export const addReview = createAction(
  'reviews/add',
  (review, restaurantId) => ({
    payload: { review, restaurantId },
    meta: { generateId: ['reviewId', 'userId'] },
  })
);

export const loadReviews = createAsyncThunk(
  'loadReviews',
  (restaurantId) => api.loadReviews(restaurantId),
  {
    condition: (restaurantId, { getState }) =>
      !reviewsLoadingSelector(getState(), { restaurantId }) &&
      !reviewsLoadedSelector(getState(), { restaurantId }),
  }
);

const { reducer } = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [addReview]: (state, action) => {
      const { text, rating } = action.payload.review;
      const { reviewId, userId } = action.meta;
      Reviews.addOne(state, { id: reviewId, userId, text, rating });
    },
    [loadReviews.pending]: (state, action) => {
      state.error = null;
      state.loading[action.meta.arg] = true;
    },
    [loadReviews.fulfilled]: (state, action) => {
      state.loading[action.meta.arg] = false;
      state.loaded[action.meta.arg] = true;
      Reviews.addMany(state, action);
    },
    [loadReviews.rejected]: (state, action) => {
      state.loading[action.meta.arg] = false;
      state.loaded[action.meta.arg] = false;
      state.error = action.error.message;
    },
  },
});

export default reducer;
