import { normalizedRestaurants as defaultRestaurants } from 'fixtures';
import { dict } from 'utils';

export default (restaurants = dict(defaultRestaurants), action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
