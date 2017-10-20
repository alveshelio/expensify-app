import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'views/Home';
import Help from 'views/Help';
import Create from 'views/Create';
import Edit from 'views/Edit';
import NotFound from 'views/NotFound';

const publicPath = '/';


export const routeCodes = {
  HOME: publicPath,
  HELP: `${publicPath}help`,
  CREATE: `${publicPath}create`,
  EDIT: `${publicPath}edit/:id`,
};

export default () => (
  <Switch>
    <Route exact path={publicPath} component={Home} />
    <Route path={routeCodes.HELP} component={Help} />
    <Route path={routeCodes.CREATE} component={Create} />
    <Route path={routeCodes.EDIT} component={Edit} />
    <Route path='*' component={NotFound} />
  </Switch>
);
