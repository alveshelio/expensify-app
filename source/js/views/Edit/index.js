import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpenseForm from '../../components/expenses/forms/ExpenseForm';
import { editExpense } from '../../actions/expensesActions';

class Edit extends Component {
  render() {
    const { match, dispatch, expense, history } = this.props;
    const expenseId = match.params.id;
    return (
      <div>
        <h2>Edit expense {expense.description}</h2>
        <ExpenseForm
          onSubmit={expenseToEdit => {
            dispatch(editExpense(expenseId, expenseToEdit));
            history.push('/');
          }}
          expense={expense}
        />
      </div>
    );
  }
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  expense: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    note: PropTypes.string,
    createdAt: PropTypes.shape({}),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapsStateToProps = (state, { match }) => ({
  expense: state.expenses.find(expense => expense.id === match.params.id),
});

export default connect(mapsStateToProps)(Edit);
