import { normalizedReviews } from '../../fixtures';

const defaultReviews = normalizedReviews.reduce((total, item) => {
  total[item.id] = item;
  return total;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
