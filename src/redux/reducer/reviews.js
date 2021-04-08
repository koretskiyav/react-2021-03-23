import { normalizedReviews as defaultReviews } from 'fixtures';
import { dict } from 'utils';

export default (reviews = dict(defaultReviews), action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
