import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className='main-navigation'>
      <ul>
        <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
        <li><NavLink activeClassName='active' to='/help'>Help</NavLink></li>
        <li><NavLink activeClassName='active' exact to='/dashboard'>Dashboard</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;

