import { LOAD_TWEETS, REMOVE_TWEET } from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_TWEETS:
      return [...action.tweets];
    case REMOVE_TWEET:
      return state.filter(t => t._id !== action.id);
    default:
      return state;
  }
};
