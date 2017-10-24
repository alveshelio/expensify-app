import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

class CreateExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        description: props.expense ? props.expense.description : '',
        amount: props.expense ? props.expense.amount : '',
        note: props.expense ? props.expense.note : '',
        createdAt: props.expense ? props.expense.createdAt : moment(),
      },
      calendarFocused: false,
      errors: [],
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.onSubmit(this.state.data);
      this.setState({ data: { description: '', amount: '', note: '', createdAt: moment() } });
    }
  };

  onChangeHandler = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
    if (this.state.data.description) {
      this.setState({
        errors: { ...this.state.errors, description: '' },
      });
    }
  };

  onChangeNumberHandler = e => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({
        ...this.state,
        data: { ...this.state.data, [e.target.name]: amount },
        errors: { ...this.state.errors, amount: '' },
      });
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({
        ...this.state,
        data: { ...this.state.data, createdAt },
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return { calendarFocused: focused };
    });
  };


  validate = data => {
    const errors = {};
    if (!data.description) errors.description = 'This field cannot be blank';
    if (!data.amount) errors.amount = 'This field cannot be blank';
    if (parseFloat(data.amount) <= 0) errors.amount = 'The amount must be greater than 0';
    if (!data.createdAt) errors.createdAt = 'This field cannot be blank';
    return errors;
  };

  render() {
    const {
      description,
      amount,
      note,
      createdAt,
    } = this.state.data;
    const { calendarFocused, errors } = this.state;

    return (
      <div>
        <h1>CreateExpenseForm</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label style={{ display: 'block' }} htmlFor='description'>Description</label>
            <input
              type='text'
              name='description'
              id='description'
              value={description}
              onChange={this.onChangeHandler}
            />
            {errors.description && <p>{errors.description}</p>}
          </div>
          <div>
            <label style={{ display: 'block' }} htmlFor='amount'>Amount</label>
            <input
              type='text'
              name='amount'
              id='amount'
              value={amount}
              onChange={this.onChangeNumberHandler}
            />
            {errors.amount && <p>{errors.amount}</p>}
          </div>
          <div>
            <label style={{ display: 'block' }} htmlFor='note'>Note</label>
            <input
              type='text'
              name='note'
              id='note'
              value={note}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor='calendar'>Created At:</label>
            <SingleDatePicker
              onDateChange={this.onDateChange}
              onFocusChange={this.onFocusChange}
              focused={calendarFocused}
              date={createdAt}
              numberOfMonths={1}
              isOutsideRange={() => false}
              hideKeyboardShortcutsPanel={true}
              id='calendar'
            />
          </div>
          <button onClick={(e) => this.onSubmit(e)}>{this.props.expense ? 'Edit Expense' : 'Create Expense'}</button>
        </form>
      </div>
    );
  }
}

CreateExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  expense: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    note: PropTypes.string,
    createdAt: PropTypes.shape({}),
  }),
};

export default CreateExpenseForm;
