import React, { Component } from 'react';

const INIT_STATE = {
  email: '',
  username: '',
  password: '',
  profileImageUrl: '',
};

export default class AuthForm extends Component {
  state = { ...INIT_STATE };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? 'signup' : 'signin';
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(() => {
        this.setState({ ...INIT_STATE });
      });
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const {
      buttonText,
      heading,
      signUp,
      errors,
      history,
      removeError,
    } = this.props;

    history.listen(() => {
      //listen to any changes in Route
      removeError();
      this.setState({ ...INIT_STATE });
    });

    return (
      <div className='row justify-content-md-center text-center'>
        <div className='col-md-6 col-lg-4 auth-form'>
          <form action='' onSubmit={this.handleSubmit}>
            {errors.message && (
              <div className='alert alert-danger'>{errors.message}</div>
            )}
            <h2 className='my-4'>{heading}</h2>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
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
            {signUp && (
              <div>
                <label htmlFor='username'>Username:</label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={username}
                  className='form-control'
                  onChange={this.handleChange}
                />
                <label htmlFor='profileImageUrl'>Profile Image url:</label>
                <input
                  type='text'
                  id='profileImageUrl'
                  name='profileImageUrl'
                  value={profileImageUrl}
                  className='form-control'
                  onChange={this.handleChange}
                />
              </div>
            )}
            <button
              type='submit'
              className='mt-5 btn btn-primary btn-lg btn-block'
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
