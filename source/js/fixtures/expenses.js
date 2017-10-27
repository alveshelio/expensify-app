import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Watter Bill',
    amount: 4554,
    note: 'The watter is expensive',
    createdAt: moment().subtract(14, 'd').valueOf(),
  },
  {
    id: '2',
    description: 'Rent',
    amount: 54554,
    note: 'January Rent',
    createdAt: moment().subtract(6, 'd').valueOf(),
  },
  {
    id: '3',
    description: 'Gum',
    amount: 154,
    note: '',
    createdAt: moment().subtract(2, 'd').valueOf(),
  },
];
