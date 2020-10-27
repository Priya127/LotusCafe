import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_CUSTOMER, REFRESH
} from './ActionTypes';



// Register Subscriber
export const schedule = ({ fullName,email,date,time }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ fullName,email,date,time });

  try {
    const res = await axios.post('/api/customers', body, config);

    dispatch({
      type: ADD_CUSTOMER,
      payload: res.data
    });

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))); 
    }



  }
};

//  Refresh form for next subscriber
export const Refresh = () => dispatch => {
  dispatch({
    type: REFRESH
  })
}
