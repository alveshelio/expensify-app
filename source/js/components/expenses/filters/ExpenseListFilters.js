import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTextFilter, sortByAmount, sortByDate } from '../../../actions/filtersActions';

const onChangeHandler = (e, dispatch) => {
  if (e.target.value === 'amount') {
    dispatch(sortByAmount());
  } else if (e.target.value === 'date') {
    dispatch(sortByDate());
  }
};

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <h4 style={{ display: 'inline-block', marginRight: 15 }}>Search</h4>
    <input
      type='text'
      name='text'
      id='text'
      value={filters.text}
      onChange={e => dispatch(setTextFilter(e.target.value))}
    />

    <h4 style={{ display: 'inline-block', marginRight: 15 }}>Sort By:</h4>
    <select
      name='sortBy'
      defaultValue={filters.sortBy}
      onChange={e => onChangeHandler(e, dispatch)}
    >
      <option value=''>Select an option</option>
      <option value='amount'>Amount</option>
      <option value='date'>Date</option>
    </select>
  </div>
);

ExpenseListFilters.propTypes = {
  filters: PropTypes.shape({
    text: PropTypes.string,
    sortBy: PropTypes.string,
    startDate: PropTypes.number,
    endDate: PropTypes.number,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);
