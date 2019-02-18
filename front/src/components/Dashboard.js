import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import { fade } from '@material-ui/core/styles/colorManipulator';
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import Chart from './Chart'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    content: {
        marginTop: 20
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    fab: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      margin: 20
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    row: {
      marginBottom: 15
    },
    actions: {
      display: 'flex',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
})

 class Dashboard extends Component {  

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query })
  }

  render() {

    const { widgets, removeWidget, classes } = this.props
    const { query } = this.state

    let showingWidgets
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingWidgets = widgets.filter((widget) => match.test(widget.titleCard))
    } else {
      showingWidgets = widgets
    }

    showingWidgets.sort(sortBy('titleCard'))
    
    return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Delfos
            </Typography>
            <div className={classes.grow} />
            
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                value={query}
                onChange={(e) => this.updateQuery(e.target.value)}
              />
            </div>

            </Toolbar>
        </AppBar>
        
        <Grid fluid className={classes.content}>
            <Chart 
              dataWidget={showingWidgets}
              onRemoveWidget={removeWidget} />                    
        </Grid>

        <Link to="/create">
            <Fab color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Link>
    </div>
    )
  }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
}
  
export default withStyles(styles)(Dashboard)
