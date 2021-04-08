import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW_AND_USER, SET_ACTIVE_RESTAURANT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  { active: normalizedRestaurants[0].id }
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload, id } = action;

  switch (type) {
    case SET_ACTIVE_RESTAURANT:
      if (!id) {
        return restaurants;
      }
      return { ...restaurants, active: id };
    case ADD_REVIEW_AND_USER:
      if (!payload?.revId.length) {
        return restaurants;
      }
      return {
        ...restaurants,
        [restaurants[restaurants.active].id]: {
          ...restaurants[restaurants.active],
          reviews: [...restaurants[restaurants.active].reviews, payload.revId],
        },
      };
    default:
      return restaurants;
  }
};
