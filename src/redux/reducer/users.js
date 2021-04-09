import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type } = action;
  switch (type) {
    case ADD_REVIEW:
      return {
        ...users,
        [action.middlewareUserUUID]: {
          id: action.middlewareUserUUID,
          name: action.values.name,
        },
      };
    default:
      return users;
  }
};
