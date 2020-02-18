import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '../store';
import Navbar from './Navbar';
import Main from './Main';
import { setAuthorizationToken, setCurrentUser } from '../store/action/auth';
import jwtDecode from 'jwt-decode';

const store = configureStore();

// so that if user is logged in and page refresh, user will still be logged in
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually tempering with the key of jwtToken in localStorage
  // or in case someone clear the redux store and redux didn't know the user is logged in
  // when the page loads, we can re-populate the redux state using setAuthorizationToken + setCurrentUser
  try {
    // to extract the middle part (payload) of the token
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (error) {
    // force them to log out
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='onboarding'>
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
