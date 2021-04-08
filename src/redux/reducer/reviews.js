import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews
    .reduce((obj, review) => ({ ...obj, [review.id]: review}),
        {});

export default (reviews = defaultReviews, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case ADD_REVIEW:
      const { id } = payload;
      return { ...reviews, [id]: payload }
    default:
      return reviews;
  }
};
