import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import tweets from './tweets';

const rootReducer = combineReducers({
  currentUser, // = { isAuthenticated: Bool, user: { } }
  errors, // = { message: String }
  tweets, // = [ tweets ]
});

export default rootReducer;
