import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewTweet } from '../store/action/tweets';

class TweetForm extends Component {
  state = {
    tweet: '',
  };

  handleNewTweet = e => {
    e.preventDefault();
    this.props.postNewTweet(this.state.tweet);
    this.setState({ tweet: '' });
    this.props.history.push('/');
  };

  render() {
    const { errors } = this.props;
    return (
      <div className='row justify-content-md-center text-center'>
        <div className='col-md-6'>
          <form action='' onSubmit={this.handleNewTweet}>
            {errors.message && (
              <div className='alert alert-danger'>{errors.message}</div>
            )}
            <h2 className='my-4'>Add New Tweet</h2>
            <textarea
              rows='3'
              onChange={e => this.setState({ tweet: e.target.value })}
              className='form-control rounded mt-4 mb-3'
            >
              {this.state.tweet}
            </textarea>
            <button type='submit' className='btn btn-primary btn-lg btn-block'>
              Tweet
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, { postNewTweet })(TweetForm);
