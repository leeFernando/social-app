import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <i className='fa fa-2x fa-twitter'></i>
          </Link>

          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link to='/signup'>Sign up</Link>
            </li>
            <li>
              <Link to='/signin'>Sign in</Link>
            </li>
          </ul>
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

export default connect(mapStateToProps, null)(Navbar);
