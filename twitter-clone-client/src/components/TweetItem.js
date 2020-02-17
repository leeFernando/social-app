import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const TweetItem = ({ date, profileImageUrl, text, username }) => (
  <div>
    <img
      src={profileImageUrl || DefaultProfileImg}
      alt={username}
      height='100'
      width='100'
      className='timeline-image'
    />
    <div className='tweet-area'>
      <Link to='/'>@{username} &nbsp;</Link>
      <span className='text-muted'>
        <Moment className='text-muted' format='Do MMM YYYY'>
          {date}
        </Moment>
      </span>
      <p>{text}</p>
    </div>
  </div>
);

export default TweetItem;
