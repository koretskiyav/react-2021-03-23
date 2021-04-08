import { normalizedReviews } from '../../fixtures';

const defaultReviews = normalizedReviews
  .reduce(( obj, review ) => ({ ...obj, [review.id]: review}),
    {});

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
