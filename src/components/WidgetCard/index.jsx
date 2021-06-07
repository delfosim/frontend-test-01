import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import {
  Paper, Grid, IconButton, Menu, MenuItem,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import useStyles from './styles';

const WidgetCard = ({
  type, series, yText, inverted,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const options = {
    title: '',
    yAxis: {
      title: {
        text: yText,
        inverted,
      },
    },
    chart: {
      type,
      scrollablePlotArea: {
        minWidth: 500,
        scrollPositionX: 0,
      },
    },
    series,
  };

  return (
    <Paper square className={classes.card}>
      <Grid container justify="space-between" alignItems="center" className={classes.header}>
        <Grid item>
          <span className={classes.title}>Widget 1</span>
        </Grid>
        <Grid item>
          <IconButton
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="widget-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <div className={classes.chart}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </Grid>
    </Paper>
  );
};

WidgetCard.propTypes = {
  type: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  yText: PropTypes.string,
  inverted: PropTypes.bool,
};

WidgetCard.defaultProps = {
  yText: 'Values',
  inverted: false,
};

export default WidgetCard;
