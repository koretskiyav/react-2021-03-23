import { normalizedUsers } from '../../fixtures';
import { ADD_USER } from '../constants';

const defaultUsers = normalizedUsers
  .reduce(( obj, user) => ({ ...obj, [user.id]: user}),
    {});

export default (users = defaultUsers, action) => {
  const {
    type,
    payload
  } = action;

  switch(type) {
    case ADD_USER:
      return { ...users, payload: { id: payload} };
    default:
      return users;
  }
}
