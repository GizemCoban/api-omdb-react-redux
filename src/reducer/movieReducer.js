import {
    MOVIELIST_PENDING,
    MOVIELIST_FULFILLED,
    MOVIELIST_REJECTED,
    MOVIEDETAILLIST_PENDING,
    MOVIEDETAILLIST_FULFILLED,
    MOVIEDETAILLIST_REJECTED,
} from "../action/movieAction";

const initialState = {
    films: [],
    loading: false,
    reject: false,
    detail: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MOVIELIST_PENDING:
            return {
                ...state,
                loading: true,
                films: [],
            };
        case MOVIELIST_FULFILLED:
            return {
                ...state,
                films: action.payload,
                loading: true,
            };
        case MOVIELIST_REJECTED:

            return {
                ...state,
                loading: false,
                reject: true,
                films: [],
            };

        case MOVIEDETAILLIST_PENDING:
            return {
                ...state,
                loading: true,
                detail: {},
            };
        case MOVIEDETAILLIST_FULFILLED:
            return {
                ...state,
                detail: action.payload,
                loading: false,
            };
        case MOVIEDETAILLIST_REJECTED:
            return {
                ...state,
                loading: false,
                reject: true,
                detail: {},
            };
        default:
            return state;
    }
};