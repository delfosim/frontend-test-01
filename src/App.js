import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import WidgetPage from "./pages/Widget";
import WidgetFormPage from "./pages/WidgetForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/widget" />
        </Route>
        <Route exact path="/widget">
          <WidgetPage />
        </Route>
        <Route path="/widget/form/:id?">
          <WidgetFormPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
