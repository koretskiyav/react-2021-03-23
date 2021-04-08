import { normalizedRestaurants } from '../../fixtures';
import { REVIEW } from '../constants';
import reviews from './reviews';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case REVIEW:
      const restaurant = restaurants[action.restaurantId];
      return {
        ...restaurants,
        [action.restaurantId]: {
          ...restaurant,
          reviews: [...restaurant.reviews, action.review.id],
        },
      };
    default:
      return restaurants;
  }
};
