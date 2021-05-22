import { MAKE_ORDER, REQUEST, SUCCESS, FAILURE } from '../constants';
import { increment, decrement, remove } from '../modules/order';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

export default (state = initialState, action) => {
  const { type, payload: id, error } = action;
  const { entities } = state;

  switch (type) {
    case increment.type:
      return {
        ...state,
        entities: { ...entities, [id]: (entities[id] || 0) + 1 },
      };
    case decrement.type:
      return {
        ...state,
        entities: {
          ...entities,
          [id]: entities[id] > 0 ? (entities[id] || 0) - 1 : 0,
        },
      };
    case remove.type:
      return { ...state, entities: { ...entities, [id]: 0 } };
    case MAKE_ORDER + REQUEST:
      return { ...state, loading: true, error: null };
    case MAKE_ORDER + SUCCESS:
      return { ...state, loading: false, loaded: true, entities: {} };
    case MAKE_ORDER + FAILURE:
      return { ...state, loading: false, loaded: false, error };
    default:
      return state;
  }
};
