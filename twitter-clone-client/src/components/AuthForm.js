import React, { Component } from 'react';

export default class AuthForm extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    profileImageUrl: '',
  };

  handleChange = e => {};
  handleSubmit = () => {};

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { buttonText, heading } = this.props;
    return (
      <div className='row justify-content-md-center text-center'>
        <div className='col-md-6'>
          <form action='' onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              className='form-control'
              onChange={this.handleChange}
            />
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              className='form-control'
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}
