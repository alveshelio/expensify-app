import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpenseForm from '../../components/expenses/forms/ExpenseForm';
import { editExpense } from '../../actions/expensesActions';

export class EditExpensePage extends Component {
  onSubmit = expenseToEdit => {
    const expenseId = this.props.match.params.id;
    // expenseToEdit is being passed in the ExpenseForm when we
    // call onSubmit and pass the object from state
    this.props.editExpense(expenseId, expenseToEdit);
    this.props.history.push('/');
  };

  render() {
    const { expense } = this.props;

    return (
      <div>
        <h2>Edit expense {expense.description}</h2>
        <ExpenseForm
          onSubmit={this.onSubmit}
          expense={expense}
        />
      </div>
    );
  }
}

EditExpensePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  editExpense: PropTypes.func.isRequired,
  expense: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    note: PropTypes.string,
    createdAt: PropTypes.number,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapsStateToProps = (state, { match }) => ({
  expense: state.expenses.find(expense => expense.id === match.params.id),
});

const mapDispatchToProps = dispatch => ({
  editExpense: (expenseId, expenseToEdit) => dispatch(editExpense(expenseId, expenseToEdit)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(EditExpensePage);
