import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpenseForm from '../../components/expenses/forms/ExpenseForm';
import { addExpense } from '../../actions/expensesActions';

const CreateExpensePage = ({ dispatch, history }) => (
  <div>
    <h1>Create</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        dispatch(addExpense(expense));
        history.push('/');
      }}
    />
  </div>
);

CreateExpensePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(CreateExpensePage);
