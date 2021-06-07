import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Grid, TextField, Select, MenuItem, Paper, IconButton, Button,
} from '@material-ui/core';
import {
  Add as AddIcon, Delete as DeleteIcon, Save as SaveIcon,
} from '@material-ui/icons';
import { WidgetCard, MultiInput } from '../../components';

import useStyles from './styles';

import { addNewWidget } from '../../store/modules/widgets/actions';

const WidgetPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [yTitle, setYTitle] = useState(null);
  const [type, setType] = useState('line');
  const [xCategories, setXCategories] = useState([]);
  const [series, setSeries] = useState([{ name: null, data: [] }]);

  const newSerie = () => {
    const copy = [...series];

    setSeries(copy.concat({ name: null, data: [] }));
  };

  const deleteSerie = (index) => {
    const copy = [...series];

    copy.splice(index, 1);

    setSeries(copy);
  };

  const handleSerieName = (value, index) => {
    const copy = [...series];
    copy[index].name = value;

    setSeries(copy);
  };

  const handleSerieData = (value, index) => {
    const copy = [...series];
    copy[index].data = value;

    setSeries(copy);
  };

  const handleSerieColor = (value, index) => {
    const copy = [...series];
    copy[index].color = value;

    setSeries(copy);
  };

  const handleSave = () => {
    const widget = {
      name, yTitle, type, xCategories, series,
    };

    dispatch(addNewWidget(widget));
    history.push('/');
  };

  return (
    <Grid container alignItems="center" direction="column">
      <Grid container item xs={10} justify="space-between" alignItems="flex-end" spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Widget Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={classes.select}
          >
            <MenuItem value="line">Line</MenuItem>
            <MenuItem value="spline">Spline</MenuItem>
            <MenuItem value="area">Area</MenuItem>
            <MenuItem value="column">Column</MenuItem>
            <MenuItem value="bar">Bar</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper square className={classes.categories}>
            <MultiInput
              label="X Categories"
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
          />
        </Grid>
        <Grid item xs={12}>
          <span className={classes.seriesTitle}>Series</span>
        </Grid>
        <Grid container item xs={12} spacing={2} alignItems="stretch" className={classes.seriesContainer}>
          {series.map((serie, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper square className={classes.serie}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Serie Name"
                      fullWidth
                      value={serie.name}
                      onChange={(e) => handleSerieName(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="color"
                      fullWidth
                      label="Serie Color"
                      value={serie.color}
                      onChange={(e) => handleSerieColor(e.target.value, index)}
                    />
                  </Grid>
                </Grid>
                <MultiInput
                  label="New Serie Value"
                  values={serie.data}
                  setValues={(value) => handleSerieData(value, index)}
                  onlyNumbers
                />
                <IconButton onClick={() => deleteSerie(index)}>
                  <DeleteIcon />
                </IconButton>
              </Paper>
            </Grid>
          ))}
          <Grid item xs={12} md={6}>
            <Paper square className={classes.newSerie}>
              <Grid container alignItems="center" justify="center">
                <IconButton onClick={newSerie}>
                  <AddIcon />
                </IconButton>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={11} item container direction="column" alignItems="center">
        <WidgetCard
          title={name}
          type={type}
          yTitle={yTitle}
          series={series}
          xCategories={xCategories}
          disableOptions
        />
      </Grid>
      <Grid xs={12} item container justify="center">
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          className={classes.save}
          onClick={handleSave}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default WidgetPage;
