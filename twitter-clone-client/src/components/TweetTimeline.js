import React from 'react';
import TweetList from '../containers/TweetList';
import UserAside from './UserAside';

const TweetTimeline = props => {
  const { username, profileImageUrl } = props;
  return (
    <div className='row'>
      <UserAside username={username} profileImageUrl={profileImageUrl} />
      <TweetList />
    </div>
  );
};

export default TweetTimeline;
