import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';

import logger from './middleware/logger';
import generateId from './middleware/generateId';
import api from './middleware/api';

import reducer from './reducer';
import history from '../history';

const middleware = [routerMiddleware(history), api, generateId, logger];

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActionPaths: ['CallAPI'] },
    }).concat(middleware),
});
