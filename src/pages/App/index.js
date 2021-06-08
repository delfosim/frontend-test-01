import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import withStyles from "@material-ui/styles/withStyles";

import Routes from "../../routes";
import store from "../../redux/store";
import styles from "./styles";
import theme from "../../theme";

function App({ classes }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Routes />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
};

export default withStyles(styles(theme))(App);
