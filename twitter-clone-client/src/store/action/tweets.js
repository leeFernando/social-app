import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_TWEETS, REMOVE_TWEET } from '../actionTypes';

export const loadTweets = tweets => ({
  type: LOAD_TWEETS,
  tweets,
});

export const fetchTweets = () => {
  return dispatch => {
    return apiCall('GET', '/api/tweets')
      .then(res => dispatch(loadTweets(res)))
      .catch(err => addError(err.message));
  };
};
