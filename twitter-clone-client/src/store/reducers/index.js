import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';

const rootReducer = combineReducers({
  currentUser, // = { isAuthenticated: Bool, user: { } }
  errors, // = { message: String }
});

export default rootReducer;
