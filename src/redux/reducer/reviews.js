import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW_AND_USER } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW_AND_USER:
      if (!payload || !payload.revId) {
        return reviews;
      }
      return {
        ...reviews,
        [payload.revId]: {
          id: payload.revId,
          userId: payload.usrId,
          text: payload.text,
          rating: payload.rating,
        },
      };
    default:
      return reviews;
  }
};
