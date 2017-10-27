import { ADD_EXPENSE, FETCH_EXPENSE, FETCH_EXPENSES, REMOVE_EXPENSE, EDIT_EXPENSE } from '../types/expensesTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case FETCH_EXPENSE:
      return state.filter(expense => expense.id === action.id);
    case FETCH_EXPENSES:
      return state;
    case EDIT_EXPENSE:
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.expense };
        }
        return expense;
      });
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    default:
      return state;
  }
};
