import React from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";

import delfosLogo from "../../assets/delfos_Intelligent_maintenance.png";
import styles from "./styles";

export default function Navbar(props) {
  const classes = styles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <img src={delfosLogo} className={classes.logo} alt="delfos" />
        {props.onSearch && (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Pesquisar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={props.onSearch}
            />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  children: PropTypes.any,
  onSearch: PropTypes.func,
};
