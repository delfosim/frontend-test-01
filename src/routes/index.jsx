import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../screens/Home';
import WidgetPage from '../screens/Widget';
import NotFoundPage from '../screens/NotFound';

import { Navbar } from '../components';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <div className="body">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/widget/:id" exact component={WidgetPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
