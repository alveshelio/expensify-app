import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import es6Promise from 'es6-promise';
import 'babel-polyfill';
import 'isomorphic-fetch';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';
import App from 'views/App';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expensesActions';
import { setTextFilter } from './actions/filtersActions';
import '../scss/app.scss';

es6Promise.polyfill();

const store = configureStore();
store.dispatch(addExpense({
  description: 'Rent',
  amount: 10000,
  createdAt: moment().subtract(7, 'm').valueOf(),
}));
store.dispatch(addExpense({
  description: 'Coffee',
  amount: 350,
  createdAt: moment().subtract(14, 'd').valueOf(),
}));
store.dispatch(addExpense({
  description: 'Car Payment',
  amount: 50000,
  createdAt: moment().subtract(7, 'd').valueOf(),
}));
store.dispatch(setTextFilter('rent'));

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render App
render(App);

if (module.hot) {
  module.hot.accept('./views/App/', () => {
    const NewClient = require('./views/App/index').default; // eslint-disable-line global-require

    render(NewClient);
  });
}
