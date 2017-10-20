import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import es6Promise from 'es6-promise';
import 'babel-polyfill';
import 'isomorphic-fetch';

import App from 'views/App';
import configureStore from './store/configureStore';
import '../scss/app.scss';

es6Promise.polyfill();

const store = configureStore();

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
