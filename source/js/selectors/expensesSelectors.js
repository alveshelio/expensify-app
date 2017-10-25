import moment from 'moment';

export default (expenses, {
  text,
  sortBy,
  startDate,
  endDate,
}) => {
  return expenses.filter(expense => {
    // console.log(`expense ${expense.description}
    // createdAt: ${moment(expense.createdAt).format('MMM Do, YYYY')} is between
    // ${moment(startDate).format('MMM Do, YYYY')} and ${moment(endDate).format('MMM Do, YYYY')}
    // ${moment(expense.createdAt).isBetween(startDate, endDate)}`);
    const datesMatch = moment(expense.createdAt).isBetween(startDate, endDate);
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return datesMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
