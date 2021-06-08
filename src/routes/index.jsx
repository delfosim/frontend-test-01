import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../screens/Home';
import CreateWidgetPage from '../screens/CreateWidget';
import SearchPage from '../screens/Search';
import WidgetPage from '../screens/EditWidget';
import NotFoundPage from '../screens/NotFound';

import { Navbar, FabWidget } from '../components';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <div className="body">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/create" exact component={CreateWidgetPage} />
        <Route path="/widget/:id" exact component={WidgetPage} />
        <Route path="/search/:name" exact component={SearchPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
    <FabWidget />
  </BrowserRouter>
);

export default Routes;
