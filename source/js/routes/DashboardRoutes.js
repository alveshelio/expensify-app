import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardHome from '../views/Dashboard/Home';
import Create from '../views/Create';
import Edit from '../views/Edit';
import DashboardHeader from '../components/BackEnd/Global/Header';

const dashboard = '/dashboard/';

export const routeCodes = {
  HOME: dashboard,
  CREATE: `${dashboard}create`,
  EDIT: `${dashboard}edit/:id`,
};

export default () => (
  <Switch>
    <DashboardHeader />
    <Route exact path={routeCodes.HOME} component={DashboardHome} />
    <Route path={routeCodes.CREATE} component={Create} />
    <Route path={routeCodes.EDIT} component={Edit} />
  </Switch>
);

