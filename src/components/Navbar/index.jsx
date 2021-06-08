import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  AppBar, Toolbar, OutlinedInput, InputLabel, InputAdornment, FormControl, Grid,
} from '@material-ui/core';

import { Search as SearchIcon } from '@material-ui/icons';

import useStyles from './styles';
import debounce from '../../utils/debounce';
import LogoImage from '../../assets/logo.png';

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const searchContent = debounce((event) => {
    if (event.target.value) {
      history.push(`/search/${event.target.value}`);
    }
  }, 500);

  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid container item xs={4} alignItems="center">
            <Link to="/">
              <img src={LogoImage} alt="Delfos" className={classes.logo} />
            </Link>
          </Grid>
          <Grid container item xs={8} md={4} alignItems="center" justify="flex-end">
            <FormControl className={classes.searchForm}>
              <InputLabel
                htmlFor="input-search"
                className={classes.searchLabel}
              >
                Search
              </InputLabel>
              <OutlinedInput
                id="input-search"
                name="search"
                label="Search"
                className={classes.search}
                onChange={searchContent}
                startAdornment={(
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
