import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from '../store/action/tweets';
import TweetItem from '../components/TweetItem';

class TweetList extends Component {
  componentDidMount() {
    this.props.fetchTweets();
  }

  render() {
    const { tweets } = this.props;
    let tweetList = tweets.map(t => (
      <TweetItem
        key={t._id}
        date={t.creatAt}
        text={t.text}
        username={t.user.username}
        profileImageUrl={t.user.profileImageUrl}
      />
    ));
    return <div>{tweetList}</div>;
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
  };
}

export default connect(mapStateToProps, { fetchTweets })(TweetList);
