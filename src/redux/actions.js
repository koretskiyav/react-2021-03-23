import {
    DECREMENT,
    INCREMENT,
    REMOVE,
    ADD_REVIEW,
    LOAD_RESTAURANTS,
    LOAD_REVIEWS,
    REQUEST,
    SUCCESS,
    FAILURE,
    LOAD_USERS,
    LOAD_PROUCTS,

} from './constants';

export const increment = (id) => ({type: INCREMENT, id});
export const decrement = (id) => ({type: DECREMENT, id});
export const remove = (id) => ({type: REMOVE, id});

export const addReview = (review, restaurantId) => ({
    type: ADD_REVIEW,
    review,
    restaurantId,
    generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
    type: LOAD_RESTAURANTS,
    CallAPI: '/api/restaurants',
});

export const loadProducts = (restaurantId) =>({
   type:LOAD_PROUCTS,
   CallAPI:'api/products?id=$(restaurantId)',
});

export const loadRevievs =(restaurantId)=>({
    type:LOAD_REVIEWS,
    CallAPI:'api/products?id=$(restaurantId)',
});

export const loadUsers = () => async(dispatch) => {
dispatch({type: LOAD_USERS +REQUEST});

    try {
        const data = await fetch(`/api/users`).then((res) =>
            res.json()
        );
        dispatch({type: LOAD_USERS + SUCCESS, data});
    } catch (error) {
        dispatch({type: LOAD_USERS + FAILURE, error});
    }
};
