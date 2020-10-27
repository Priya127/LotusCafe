import {
    USER_LOADED, REGISTER_SUCCESS, LOGIN_SUCCESS,
    ACCOUNT_DELETED, AUTH_ERROR, LOGOUT, ADD_SUBSCRIBER,REFRESH,ADD_CUSTOMER
} from '../actions/ActionTypes'


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    subscriber:null,
    customer:null
}

export default function (state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case USER_LOADED:
            return { ...state, isAuthenticated: true, loading: false, user: payload }

        case REGISTER_SUCCESS:
            return { ...state, ...payload, isAuthenticated: null, loading: false };
        case ADD_SUBSCRIBER:
            return { ...state, subscriber:payload, loading: false };
        case ADD_CUSTOMER:
            return { ...state, customer:payload, loading: false };
        case REFRESH:
            return {...state, subscriber: null, customer:null, loading: false} 
        case LOGIN_SUCCESS:
            return { ...state, ...payload, isAuthenticated: true, loading: false };

        case ACCOUNT_DELETED:
            return { ...state, isAuthenticated: false, loading: false, token: null };

        case AUTH_ERROR:
            return { ...state, token: null, isAuthenticated: false, loading: false };
        case LOGOUT:
            return { ...state, token: null, isAuthenticated: false, loading: false };

        default:
            return state;
    }
}