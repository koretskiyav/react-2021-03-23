import { normalizedProducts } from 'fixtures';
import { dict } from 'utils';

export default (products = dict(normalizedProducts), action) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};
