import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Details, Options, Overview } from './containers';

const routers = (
  <Route path="/" component={App}>
    <IndexRoute component={Overview} />
    <Route path="/option" component={Options} />
    <Route path="/detail" component={Details} />
  </Route>
);

export default routers;
