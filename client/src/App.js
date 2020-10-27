import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap-social/bootstrap-social.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import  setAuthToken  from './utils/setAuthToken';
import { loadUser } from './actions/authAction';
import {LOGOUT} from './actions/ActionTypes' 


const App = () => {
  
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);


  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
      
          <Main />

        </div>
      </BrowserRouter>
    </Provider>
  );
}

//basename={process.env.PUBLIC_URL}




export default App;