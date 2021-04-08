import {normalizedRestaurants} from '../../fixtures';
import {REVIEW_SUBMIT} from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce(
    (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
    {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case REVIEW_SUBMIT:
      const {review} = action;
      restaurants[review.restId].reviews.push(review.id);

      return {...restaurants};
    default:
      return restaurants;
  }
};
