import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className='home-hero'>
    <h1>Want to know what's happening in the world right now?</h1>
    <Link to='/signup' className='btn btn-primary btn-lg'>
      Sign up!
    </Link>
  </div>
);

export default Homepage;
