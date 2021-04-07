import { normalizedUsers as defaultUsers } from 'fixtures';
import { dict } from 'utils';

export default (users = dict(defaultUsers), action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
