import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_TWEETS, REMOVE_TWEET } from '../actionTypes';

export const loadTweets = tweets => ({
  type: LOAD_TWEETS,
  tweets,
});

export const removeTweet = id => ({
  type: REMOVE_TWEET,
  id,
});

export const fetchTweets = () => {
  return dispatch => {
    return apiCall('get', '/api/tweets')
      .then(res => dispatch(loadTweets(res)))
      .catch(err => dispatch(addError(err.message)));
  };
};

export const deleteTweet = (userId, tweetId) => {
  return dispatch => {
    return apiCall('delete', `/api/users/${userId}/tweets/${tweetId}`)
      .then(() => dispatch(removeTweet(tweetId)))
      .catch(err => dispatch(addError(err.message)));
  };
};

export const postNewTweet = text => {
  return (dispatch, getState) => {
    const { currentUser } = getState();
    const id = currentUser.user.id;
    return apiCall('post', `/api/users/${id}/tweets`, { text })
      .then(() => {}) // do nothing since the page will reload and get the updated tweets
      .catch(err => dispatch(addError(err.message)));
  };
};
