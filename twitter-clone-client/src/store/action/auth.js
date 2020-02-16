import { apiCall } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';

function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function authUser(type, userData) {
  return dispatch => {
    // wrap thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
      return apiCall('post', `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem('jwtToken', token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve(); // if the API call succeeded
        })
        .catch(err => {
          dispatch(addError(err.message));
          reject(); // if the API call failed
        });
    });
  };
}
