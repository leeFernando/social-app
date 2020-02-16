import { apiCall } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';

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
          resolve(); // if the API call succeeded
        })
        .catch(err => {
          reject(); // if the API call failed
        });
    });
  };
}
