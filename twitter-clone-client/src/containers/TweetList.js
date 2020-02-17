import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTweets, deleteTweet } from '../store/action/tweets';
import TweetItem from '../components/TweetItem';

class TweetList extends Component {
  componentDidMount() {
    this.props.fetchTweets();
  }

  render() {
    const { tweets, currentUser, deleteTweet } = this.props;
    let tweetList = tweets.map(t => (
      <TweetItem
        key={t._id}
        date={t.creatAt}
        text={t.text}
        username={t.user.username}
        profileImageUrl={t.user.profileImageUrl}
        isCurrentUser={currentUser === t.user._id}
        deleteTweet={() => deleteTweet(t.user._id, t._id)}
      />
    ));
    return (
      <div className='row col-sm-8'>
        <div className='offset-1 col-sm-10 tweet-list'>
          <ul className='list-group' id='tweets'>
            {tweetList}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    currentUser: state.currentUser.user.id,
  };
}

export default connect(mapStateToProps, { fetchTweets, deleteTweet })(
  TweetList,
);
