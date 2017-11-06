import React from 'react';

import ExpenseList from '../../components/expenses/ExpenseList';
import ExpenseListFilters from '../../components/expenses/filters/ExpenseListFilters';

const Home = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default Home;
