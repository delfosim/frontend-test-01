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
  type, series, yTitle, title, disableOptions, xCategories, onDelete, onEdit,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const options = {
    title: '',
    yAxis: {
      title: {
        text: yTitle,
      },
    },
    xAxis: {
      categories: xCategories,
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
          <span className={classes.title}>{title}</span>
        </Grid>
        {
          !disableOptions
            ? (
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
                  <MenuItem onClick={onEdit}>Edit</MenuItem>
                  <MenuItem onClick={onDelete}>Delete</MenuItem>
                </Menu>
              </Grid>
            )
            : null
        }
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
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  yTitle: PropTypes.string,
  disableOptions: PropTypes.bool,
  xCategories: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

WidgetCard.defaultProps = {
  yTitle: null,
  disableOptions: false,
  xCategories: null,
  onEdit: () => {},
  onDelete: () => {},
};

export default WidgetCard;
