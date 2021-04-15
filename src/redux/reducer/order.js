import produce from 'immer';
import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default produce(
  (draft = { entities: {}, restaurantMap: {} }, action) => {
    const { type, id, parentId } = action;
    switch (type) {
      case INCREMENT:
        draft.entities[id] = (draft.entities[id] || 0) + 1;
        if (parentId) {
          draft.restaurantMap[id] = parentId;
        }
        break;
      case DECREMENT:
        draft.entities[id] =
          draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0;
        break;
      case REMOVE:
        draft.entities[id] = 0;
        break;
      default:
        return draft;
    }

    return draft;
  }
);
