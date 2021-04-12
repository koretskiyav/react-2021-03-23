<<<<<<< HEAD
import { ADD_REVIEW } from '../constants';
import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';
=======
import { normalizedReviews } from '../../fixtures';

const defaultReviews = normalizedReviews.reduce((total, item) => {
  total[item.id] = item;
  return total;
}, {});
>>>>>>> b5f9bfe384059c9fd0cd8396e07fe7c58a98ab9c

export default (state = arrToMap(normalizedReviews), action) => {
  const { type, review, reviewId, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    default:
      return state;
  }
};
