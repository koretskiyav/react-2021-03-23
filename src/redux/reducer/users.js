import { normalizedUsers } from '../../fixtures';

const defaultUsers = normalizedUsers
  .reduce(( obj, user) => ({ ...obj, [user.id]: user}),
    {});

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch(type) {
    default:
      return users;
  }
}
