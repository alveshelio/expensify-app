import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../../selectors/expensesSelectors';
import { removeExpense } from '../../actions/expensesActions';

export const ExpenseList = ({ expenses, filters, dispatch }) => {
  return (
    <div>
      <h1>ExpenseList</h1>
      {
        expenses.length > 0 ?
          expenses.map(expense =>
            (<ExpenseListItem
              key={expense.id}
              {...filters}
              {...expense}
              onRemoveHandle={id => dispatch(removeExpense(id))}
            />)) :
          <p>You don&apos;t have any expenses yet</p>
      }
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    note: PropTypes.string,
    createdAt: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  filters: PropTypes.shape({
    text: PropTypes.string,
    sortBy: PropTypes.string,
    startDate: PropTypes.number,
    endDate: PropTypes.number,
  }),
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
