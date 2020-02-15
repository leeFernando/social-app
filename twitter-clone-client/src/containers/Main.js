import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = props => (
  <div className='container'>
    <Switch>
      <Route exact path='/' render={props => <Homepage {...props} />} />
      <Route
        exact
        path='/signin'
        render={props => (
          <AuthForm {...props} buttonText='Log in' heading='Welcome Back.' />
        )}
      />
      <Route
        exact
        path='/signup'
        render={props => (
          <AuthForm {...props} buttonText='Sign me up!' heading='Join today.' />
        )}
      />
    </Switch>
  </div>
);

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default withRouter(connect(mapStateToProps, null)(Main));
