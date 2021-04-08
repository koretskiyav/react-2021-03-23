import { normalizedUsers } from '../../fixtures';
import {REVIEW_SUBMIT} from "../constants";

const defaultUsers = normalizedUsers.reduce(
    (acc, user) => ({ ...acc, [user.id]: user }),
    {}
);

export default (users = defaultUsers, action) => {
    const { type } = action;

    switch (type) {
        case REVIEW_SUBMIT:
            const {review} = action;

            return {...users, [review.userId]: {id: review.userId, name: review.name}};
        default:
            return users;
    }
};
