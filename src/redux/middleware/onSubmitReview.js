import {REVIEW_SUBMIT} from "../constants";
import {generateUUID} from "../functions";

export default (store) => (next) => (action) => {
    if (action.type === REVIEW_SUBMIT) {
        action.review.id = generateUUID();
        action.review.userId = generateUUID();
    }

    next(action);
}