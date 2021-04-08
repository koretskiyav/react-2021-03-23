import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW_AND_USER } from '../constants';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_REVIEW_AND_USER:
      action.payload.usrId = uuidv4();
      action.payload.revId = uuidv4();
      break;
    default:
      break;
  }
  next(action);
};
