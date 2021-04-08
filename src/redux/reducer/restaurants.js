import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, review, restaurant } = action;
  const addReviewToRest = (restaurants, restaurant, review) => {
    return restaurants[restaurant].reviews.push(review);
  };

  switch (type) {
    case ADD_REVIEW:
      addReviewToRest(restaurants, restaurant, review.id);
      return restaurants;
    default:
      return restaurants;
  }
};
