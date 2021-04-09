import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.type === 'ADD_REVIEW') {
    action.middlewareUserUUID = uuidv4();
    action.middlewareReviewUUID = uuidv4();
  }

  next(action);
};
