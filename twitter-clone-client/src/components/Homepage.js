import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated)
    return (
      <div className='home-hero'>
        <h1>Want to know what's happening in the world right now?</h1>
        <Link to='/signup' className='btn btn-primary btn-lg'>
          Sign up!
        </Link>
      </div>
    );
  return <div>Welcome!!</div>;
};

export default Homepage;
