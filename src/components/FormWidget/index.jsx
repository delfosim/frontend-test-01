import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Grid, TextField, Select, MenuItem, Paper, IconButton,
} from '@material-ui/core';
import {
  Add as AddIcon, Delete as DeleteIcon,
} from '@material-ui/icons';
import MultiInput from '../MultiInput';

import useStyles from './styles';

const defaultSeries = [{ name: null, data: [] }];

const FormWidget = ({ widget, onChange }) => {
  const classes = useStyles();

  const [name, setName] = useState(widget.name || '');
  const [yTitle, setYTitle] = useState(widget.yTitle || null);
  const [type, setType] = useState(widget.type || 'line');
  const [xCategories, setXCategories] = useState(widget.xCategories || []);
  const [series, setSeries] = useState(widget.series || defaultSeries);

  useEffect(() => {
    onChange({
      name, yTitle, type, xCategories, series,
    });
  }, [name, yTitle, type, xCategories, series]);

  useEffect(() => {
    if (name !== widget.name) {
      setName(widget.name);
    }

    if (yTitle !== widget.yTitle) {
      setYTitle(widget.yTitle);
    }

    if (type !== widget.type) {
      setType(widget.type);
    }

    if (xCategories !== widget.xCategories) {
      setXCategories(widget.xCategories);
    }

    if (series !== widget.series) {
      setSeries(widget.series);
    }
  }, [widget]);

  const newSerie = () => {
    const copy = [...series];
    setSeries(copy.concat({ name: null, data: [] }));
  };

  const deleteSerie = (index) => {
    const copy = [...series];
    copy.splice(index, 1);
    setSeries(copy);
  };

  const handleSerie = (value, index, column) => {
    const copy = [...series];
    copy[index][column] = value;
    setSeries(copy);
  };

  return (
    <Grid container item xs={10} justify="space-between" alignItems="flex-end" spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          label="Widget Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          data-tut="widget-name-input"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={classes.select}
          data-tut="widget-type-input"
        >
          <MenuItem value="line">Line</MenuItem>
          <MenuItem value="spline">Spline</MenuItem>
          <MenuItem value="area">Area</MenuItem>
          <MenuItem value="column">Column</MenuItem>
          <MenuItem value="bar">Bar</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper square className={classes.categories} data-tut="widget-data-labels-input">
          <MultiInput
            label="Data Labels"
            values={xCategories}
            setValues={setXCategories}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Y Axis Title"
          name="yTitle"
          value={yTitle}
          onChange={(e) => setYTitle(e.target.value)}
          fullWidth
          data-tut="widget-y-title-input"
        />
      </Grid>
      <Grid item xs={12}>
        <span className={classes.seriesTitle}>Series</span>
      </Grid>
      <Grid container item xs={12} spacing={2} alignItems="stretch" className={classes.seriesContainer}>
        {series.map((serie, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper square className={classes.serie} data-tut="widget-series-input">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Series Name"
                    fullWidth
                    value={serie.name}
                    onChange={(e) => handleSerie(e.target.value, index, 'name')}
                    data-tut="widget-serie-name-input"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="color"
                    fullWidth
                    label="Series Color"
                    value={serie.color}
                    onChange={(e) => handleSerie(e.target.value, index, 'color')}
                    data-tut="widget-serie-color-input"
                  />
                </Grid>
              </Grid>
              <Grid item data-tut="widget-serie-value-input">

                <MultiInput
                  label="New Series Value"
                  values={serie.data}
                  setValues={(value) => handleSerie(value, index, 'data')}
                  onlyNumbers
                />
              </Grid>
              <IconButton onClick={() => deleteSerie(index)}>
                <DeleteIcon />
              </IconButton>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <Paper square className={classes.newSerie} data-tut="widget-serie-new-input">
            <Grid container alignItems="center" justify="center">
              <IconButton onClick={newSerie}>
                <AddIcon />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

FormWidget.propTypes = {
  widget: PropTypes.shape({
    name: PropTypes.string,
    yTitle: PropTypes.string,
    type: PropTypes.string,
    xCategories: PropTypes.array,
    series: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.array,
      color: PropTypes.string,
    })),
  }),
  onChange: PropTypes.func,
};

FormWidget.defaultProps = {
  widget: {
    title: '',
    yTitle: null,
    type: 'line',
    xCategories: [],
    series: defaultSeries,
  },
  onChange: () => {},
};

export default FormWidget;
