import produce from 'immer';
import { ADD_REVIEW } from '../constants';
import { arrToMap } from '../utils';
import {
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';


const initialState = {
  entities: {},
  loading: false,
  loaded: true,
  error: null
};

export default produce((draft = initialState, action) => {
  const { type, review, userId, data, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_USERS + SUCCESS:
      draft.loading = false;
      draft.loaded = true;
      draft.entities = arrToMap(data);
      break;
    case LOAD_USERS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      const { name } = review;
      draft[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
