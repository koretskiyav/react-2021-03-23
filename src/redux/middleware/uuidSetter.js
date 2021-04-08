import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  action.middlewareUUID = uuidv4();
  next(action);
};
