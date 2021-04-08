import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW_AND_USER } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW_AND_USER:
      if (!payload || !payload.usrId) {
        return users;
      }
      return {
        ...users,
        [payload.usrId]: { id: payload.usrId, name: payload.name },
      };
    default:
      return users;
  }
};
