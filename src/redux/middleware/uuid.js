import { v4 as uuidv4 } from 'uuid';
import { REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  if (action.type == REVIEW) {
    action.review.id = uuidv4();
    action.userId = uuidv4();
  }
  next(action);
};
