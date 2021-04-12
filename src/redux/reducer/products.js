import {arrToMap} from '../utils';

import {
    REQUEST,
    LOAD_PROUCTS,
    SUCCESS,
    FAILURE,
} from '../constants';

const initState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
};

export default (state = initState, action) => {
    const {type, error, data} = action;

    switch (type) {
        case LOAD_PROUCTS + REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOAD_PROUCTS + SUCCESS:
            return {
                ...state,
                entities: {
                    ...state.entities,
                    ...arrToMap(data)
                },
                loading: false,
                loaded: true,
            };


        case LOAD_PROUCTS + FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error,
            };
        default:
            return state;
    }
};
