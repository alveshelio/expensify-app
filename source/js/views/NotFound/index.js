import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>NotFound</h1>
    <p>Sorry but the page you are looking for is not here</p>
    <Link to='/'>Back to Home</Link>
  </div>
);

export default NotFound;
