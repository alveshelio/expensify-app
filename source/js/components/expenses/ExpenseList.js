import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../../selectors/expensesSelectors';

const ExpenseList = (props) => {
  const { expenses, filters } = props;
  return (
    <div>
      <h1>ExpenseList</h1>
      {
        expenses.length > 0 ?
          expenses.map(expense => <ExpenseListItem key={expense.id} {...filters} {...expense} />) :
          <p>You don&apos;t have any expenses yet</p>
      }
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    note: PropTypes.string,
    createdAt: PropTypes.shape({
    }),
  }).isRequired).isRequired,
  filters: PropTypes.shape({
    text: PropTypes.string,
    sortBy: PropTypes.string,
    startDate: PropTypes.number,
    endDate: PropTypes.number,
  }),
};

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
