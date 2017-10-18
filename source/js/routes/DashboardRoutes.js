import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Create from '../views/Dashboard/Create';
import Edit from '../views/Dashboard/Edit';

const dashboard = '/dashboard/';

export const routeCodes = {
  DASHBOARD: dashboard,
  CREATE: `${dashboard}create`,
  EDIT: `${dashboard}edit`,
};

export default () => (
  <Switch>
    <Route path={routeCodes.CREATE} component={Create} />
    <Route path={routeCodes.EDIT} component={Edit} />
  </Switch>
);

