import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.type === 'ADD_REVIEW') {
    const idReview = uuidv4();
    const idUser = uuidv4();
    const review = action.review;
    review.id = idReview;
    review.userId = idUser;
    next(action);
  }
};
