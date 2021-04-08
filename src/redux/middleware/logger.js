/*
  export default (store) => (next) => (action) => {
  console.log('before: ', store.getState());
  console.log('action: ', action);
  next(action);
  console.log('after: ', store.getState());
};*/
import  { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  const uuid = uuidv4();
  const isAddReviewProcess = action.type === ADD_REVIEW;

};
