import { LOAD_REVIEWS, LOAD_PROUCTS, SUCCESS } from '../constants';

export default (state={},action)=>{
    const {type,CallAPI} = action;
    switch (type){
        case LOAD_PROUCTS + SUCCESS:
        case LOAD_REVIEWS + SUCCESS:
            return {...state,[CallAPI]:true};
        default:
            return state;
    }
};
