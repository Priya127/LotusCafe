import axios from 'axios';
import {
  ADD_SUBSCRIBER, REFRESH
} from './ActionTypes';



// Register Subscriber
export const subscribe = ({ firstName, lastName, email }) => async dispatch => {
  
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ firstName, lastName, email });

  try {
    const res = await axios.post('/api/subscribers', body, config);

    dispatch({
      type: ADD_SUBSCRIBER,
      payload: res.data
    });

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => alert(`${error.msg}`));
    }



  }
};

//  Refresh form for next subscriber
export const Refresh = () => dispatch => {
  dispatch({
    type: REFRESH
  })
}
