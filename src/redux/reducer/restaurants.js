import { normalizedRestaurants } from '../../fixtures';

const defaultRestaurants = normalizedRestaurants
    .reduce(( obj, restaurant) => { ...obj, [restaurant.id]: restaurant},
        {});

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
