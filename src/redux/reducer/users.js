import produce from 'immer';
import { LOAD_USERS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { addReview } from '../modules/reviews';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST: {
      draft.error = null;
      draft.loading = true;
      break;
    }
    case LOAD_USERS + SUCCESS: {
      draft.loading = false;
      draft.loaded = true;
      draft.entities = { ...draft.entities, ...arrToMap(data) };
      break;
    }
    case LOAD_USERS + FAILURE: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    }
    case addReview.type:
      const { userId } = action.meta;
      const { name } = action.payload.review;
      draft.entities[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
