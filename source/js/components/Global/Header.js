import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify App</h1>
    <nav className='main-navigation'>
      <ul>
        <li><NavLink activeClassName='active' exact to='/'>Dashboard</NavLink></li>
        <li><NavLink activeClassName='active' exact to='/create'>Create Expense</NavLink></li>
        <li><NavLink activeClassName='active' to='/help'>Help</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;

