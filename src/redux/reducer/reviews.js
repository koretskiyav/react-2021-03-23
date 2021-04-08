import { normalizedReviews } from '../../fixtures';
import { REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, review } = action;

  switch (type) {
    case REVIEW:
      return {
        ...reviews,
        [review.id]: {
          id: review.id,
          userId: action.userId,
          text: review.text,
          rating: review.rating,
        },
      };
    default:
      return reviews;
  }
};
