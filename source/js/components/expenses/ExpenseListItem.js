import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeExpense } from '../../actions/expensesActions';

const ExpenseListItem = ({
  id,
  description,
  amount,
  note,
  createdAt,
  sortBy,
  text,
  dispatch,
  history,
}) => {
  return (
    <div className='expense-list-item'>
      <span>Description: {description}</span>
      {note && <span>Note: {note}</span>}
      <span>Amount: {amount}</span>
      {createdAt && <span>Created On: {createdAt.format('MMM Do, YYYY')}</span>}
      <button onClick={() => dispatch(removeExpense(id))}>Remove</button>
      <Link to={`/edit/${id}`}>Edit</Link>
      <hr />
    </div>
  );
};

ExpenseListItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  note: PropTypes.string,
  createdAt: PropTypes.shape({

  }),
  sortBy: PropTypes.string,
  text: PropTypes.string,
};

// const mapStateToProps = state => ({
//   expenses: state.expenses,
// });

export default connect()(ExpenseListItem);
