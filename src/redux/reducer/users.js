import produce from 'immer';

import {arrToMap} from '../utils';

import {
    REQUEST,
    ADD_REVIEW,
    SUCCESS,
    LOAD_USERS,
    FAILURE,
} from '../constants';

const initState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
};

export default produce((state = initState, action) => {
    const {payload, type, error, userId, data} = action;

    switch (type) {
        case ADD_REVIEW:
            const {name} =payload.review;
            state[userId] = {id: userId, name};
            break;
        default:
            return state;

        case LOAD_USERS + SUCCESS:
            return {
                ...state,
                entities: {
                    ...state.entities,
                    ...arrToMap(data)
                },
                loading: false,
                loaded: true,
            };

        case LOAD_USERS + REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOAD_USERS + FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error,
            };
    }
});