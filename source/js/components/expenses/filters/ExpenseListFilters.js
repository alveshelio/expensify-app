import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByAmount, sortByDate, setFilterStartDate, setFilterEndDate } from '../../../actions/filtersActions';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  onChangeHandler = e => {
    if (e.target.value === 'amount') {
      this.props.sortByAmount();
    } else if (e.target.value === 'date') {
      this.props.sortByDate();
    }
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setFilterStartDate(startDate);
    this.props.setFilterEndDate(endDate);
  };

  onSearchChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    const { filters } = this.props;

    return (
      <div>
        <h4 style={{ display: 'inline-block', marginRight: 15 }}>Search</h4>
        <input
          type='text'
          name='text'
          id='text'
          value={filters.text}
          onChange={this.onSearchChange}
        />

        <h4 style={{ display: 'inline-block', marginRight: 15 }}>Sort By:</h4>
        <select
          name='sortBy'
          defaultValue={filters.sortBy}
          onChange={this.onChangeHandler}
        >
          <option value=''>Select an option</option>
          <option value='amount'>Amount</option>
          <option value='date'>Date</option>
        </select>
        <h4 style={{ display: 'inline-block', marginRight: 15, marginLeft: 15 }}>Date Range:</h4>
        <DateRangePicker
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={() => false}
          hideKeyboardShortcutsPanel={true}
        />
      </div>
    );
  }
}

ExpenseListFilters.propTypes = {
  setFilterStartDate: PropTypes.func.isRequired,
  setFilterEndDate: PropTypes.func.isRequired,
  setTextFilter: PropTypes.func.isRequired,
  sortByAmount: PropTypes.func.isRequired,
  sortByDate: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    text: PropTypes.string,
    sortBy: PropTypes.string,
    startDate: PropTypes.shape({}),
    endDate: PropTypes.shape({}),
  }).isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  setFilterStartDate: startDate => dispatch(setFilterStartDate(startDate)),
  setFilterEndDate: endDate => dispatch(setFilterEndDate(endDate)),
  setTextFilter: searchTerm => dispatch(setTextFilter(searchTerm)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
