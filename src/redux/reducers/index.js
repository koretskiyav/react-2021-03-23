import { combineReducers } from 'redux';
import orderReducer from './order';
import basketReducer from './basket';

export default combineReducers({
  order: orderReducer,
  foo: () => 'bar',
  basket: basketReducer
});
