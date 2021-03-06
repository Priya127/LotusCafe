import { SET_ALERT, REMOVE_ALERT } from './ActionTypes'
import { v4 as uuidv4 } from 'uuid';

export const setAlert = ( msg, alertType, timeout = 3000 ) => dispatch => {
    const id = uuidv4();
    dispatch({
        payload: { msg, alertType, id },
        type: SET_ALERT
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

