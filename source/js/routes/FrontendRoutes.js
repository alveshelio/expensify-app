import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'views/Home';
import Help from 'views/Help';
import Dashboard from 'views/Dashboard';
import NotFound from 'views/NotFound';

const publicPath = '/';
const dashboard = `${publicPath}dashboard/`;

export const routeCodes = {
  HOME: publicPath,
  HELP: `${publicPath}help`,
  DASHBOARD: dashboard,
};

export default () => (
  <Switch>
    <Route exact path={publicPath} component={Home} />
    <Route path={routeCodes.HELP} component={Help} />
    <Route path={routeCodes.DASHBOARD} component={Dashboard} />
    <Route path='*' component={NotFound} />
  </Switch>
);
