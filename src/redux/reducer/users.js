import { normalizedUsers } from '../../fixtures';
import { REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, review } = action;

  switch (type) {
    case REVIEW:
      return {
        ...users,
        [action.userId]: {
          id: action.userId,
          name: action.review.name,
        },
      };
    default:
      return users;
  }
};
