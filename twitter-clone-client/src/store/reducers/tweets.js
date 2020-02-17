import { LOAD_TWEETS, REMOVE_TWEET } from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_TWEETS:
      return [...action.tweets];
    default:
      return state;
  }
};
