import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpenseForm from '../../components/expenses/forms/ExpenseForm';
import { addExpense } from '../../actions/expensesActions';

export class CreateExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.onSubmit(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Create</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

CreateExpensePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: expense => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(CreateExpensePage);
