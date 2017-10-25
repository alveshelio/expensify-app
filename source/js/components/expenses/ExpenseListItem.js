import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({
  id,
  description,
  amount,
  note,
  createdAt,
  onRemoveHandle,
}) => {
  return (
    <div className='expense-list-item'>
      <span><Link to={`/edit/${id}`}>{description}</Link></span>
      {note && <span>Note: {note}</span>}
      <span>Amount: {amount}</span>
      {createdAt && <span>Created On: {createdAt.format('MMM Do, YYYY')}</span>}
      <button onClick={() => onRemoveHandle(id)}>Remove</button>
      <hr />
    </div>
  );
};

ExpenseListItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  note: PropTypes.string,
  createdAt: PropTypes.shape({}),
  onRemoveHandle: PropTypes.func.isRequired,
};

export default ExpenseListItem;
