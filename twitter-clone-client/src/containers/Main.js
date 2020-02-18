import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/action/auth';
import { removeError } from '../store/action/errors';

const Main = props => {
  const { authUser, errors, removeError } = props;
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' render={props => <Homepage {...props} />} />
        <Route
          exact
          path='/signin'
          render={props => (
            <AuthForm
              errors={errors}
              removeError={removeError}
              onAuth={authUser}
              buttonText='Log in'
              heading='Welcome Back.'
              {...props}
            />
          )}
        />
        <Route
          exact
          path='/signup'
          render={props => (
            <AuthForm
              signUp
              errors={errors}
              removeError={removeError}
              onAuth={authUser}
              buttonText='Sign me up!'
              heading='Join today.'
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
  };
}

export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Main),
);
