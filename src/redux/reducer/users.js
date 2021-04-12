<<<<<<< HEAD
import produce from 'immer';
import { ADD_REVIEW } from '../constants';
import { normalizedUsers } from '../../fixtures';
import { arrToMap } from '../utils';

export default produce((draft = arrToMap(normalizedUsers), action) => {
  const { type, review, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = review;
      draft[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
=======
import { normalizedUsers } from '../../fixtures.js';

const defaultUsers = normalizedUsers.reduce((total, item) => {
  total[item.id] = item;
  return total;
}, {});

export default (users = defaultUsers, action) => {
  const { type } = action;
  switch (type) {
    default:
      return users;
  }
};
>>>>>>> b5f9bfe384059c9fd0cd8396e07fe7c58a98ab9c
