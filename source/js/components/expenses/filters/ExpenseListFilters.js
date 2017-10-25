import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

import { setTextFilter, sortByAmount, sortByDate, setFilterStartDate, setFilterEndDate } from '../../../actions/filtersActions';

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  onChangeHandler = (e, dispatch) => {
    if (e.target.value === 'amount') {
      dispatch(sortByAmount());
    } else if (e.target.value === 'date') {
      dispatch(sortByDate());
    }
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setFilterStartDate(startDate));
    this.props.dispatch(setFilterEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    const { filters, dispatch } = this.props;

    return (
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
          onChange={e => this.onChangeHandler(e, dispatch)}
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
  filters: PropTypes.shape({
    text: PropTypes.string,
    sortBy: PropTypes.string,
    startDate: PropTypes.shape({}),
    endDate: PropTypes.shape({}),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);
