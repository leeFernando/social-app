import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/action/auth';

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { currentUser } = this.props;
    return (
      <nav className='navbar navbar-expand'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <i className='fa fa-2x fa-twitter'></i>
          </Link>

          {currentUser.isAuthenticated ? (
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to={`/users/${currentUser.user.id}/tweets/new`}>
                  New Tweet
                </Link>
              </li>
              <li>
                <Link to='' onClick={this.logout}>
                  Sign out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to='/signup'>Sign up</Link>
              </li>
              <li>
                <Link to='/signin'>Sign in</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
