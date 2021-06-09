import { ThemeProvider } from "@material-ui/core";
import * as React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import { WidgetsStore } from "./shared/context/widgetStore";
import { theme } from "./styles/globalStyle";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <WidgetsStore>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </WidgetsStore>
    </ThemeProvider>
  );
};

export default App;
