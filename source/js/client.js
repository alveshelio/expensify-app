import React from 'react';
import ReactDOM from 'react-dom';
import es6Promise from 'es6-promise';
import 'babel-polyfill';
import 'isomorphic-fetch';

import App from './views/App/';
import '../scss/app.scss';

es6Promise.polyfill();

const render = Component => {
  ReactDOM.render(
    <Component />,
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
