import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, review } = action;
  const reviewForAdd = (review) => {
    let obj = {};
    obj.id = review.id;
    obj.userId = review.userId;
    obj.text = review.text;
    obj.rating = review.rating;
    return obj;
  };

  switch (type) {
    case ADD_REVIEW:
      return { ...reviews, [review.id]: reviewForAdd(review) };
    default:
      return reviews;
  }
};
