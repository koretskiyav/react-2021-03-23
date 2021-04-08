import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, review } = action;

  const userForAdd = (review) => {
    let obj = {};
    obj.id = review.userId;
    obj.name = review.name;
    return obj;
  };

  switch (type) {
    case ADD_REVIEW:
      return {
        ...users,
        [review.userId]: userForAdd(review),
      };
    default:
      return users;
  }
};
