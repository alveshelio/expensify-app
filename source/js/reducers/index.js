import { combineReducers } from 'redux';

import filters from './filtersReducer';
import expenses from './expensesReducer';

export default combineReducers({
  expenses,
  filters,
});
