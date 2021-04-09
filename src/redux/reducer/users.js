import { normalizedUsers } from '../../fixtures.js';

const defaultUsers = normalizedUsers.reduce((total, item) => {
  total[item.id] = item;
}, {});

export default (users = defaultUsers, action) => {
  const { type } = action;
  switch (type) {
    default:
      return users;
  }
};
