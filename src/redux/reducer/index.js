import { connectRouter } from 'connected-react-router';

import order from '../modules/order';
import restaurants from './restaurants';
import products from './products';
import reviews from '../modules/reviews';
import users from './users';

import history from '../../history';

export default {
  router: connectRouter(history),
  order,
  restaurants,
  products,
  reviews,
  users,
};
