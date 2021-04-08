import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from './middleware/logger';
import onSubmitReview from "./middleware/onSubmitReview";

import reducer from './reducer';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(onSubmitReview))
);
