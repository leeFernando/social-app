import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
  isAuthenticated: false, // true when logged in
  user: {}, // all info of the logged in user
};

export default (state = { DEFAULT_STATE }, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // false if user is empty obj and true otherwise
        isAuthenticated: !!Object.keys(action.user),
        user: action.user,
      };
    default:
      return state;
  }
};
