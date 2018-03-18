import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ user, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    user !== null
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)