import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Grid, Button,
} from '@material-ui/core';
import {
  Save as SaveIcon,
} from '@material-ui/icons';
import { WidgetCard, FormWidget } from '../../components';

import useStyles from './styles';

import { addNewWidget } from '../../store/modules/widgets/actions';

const WidgetPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [widget, setWidget] = useState({});

  const handleSave = () => {
    dispatch(addNewWidget(widget));
    history.push('/');
  };

  return (
    <Grid container alignItems="center" direction="column">
      <FormWidget
        onChange={setWidget}
      />
      <Grid xs={11} item container direction="column" alignItems="center">
        <WidgetCard
          title={widget.name}
          type={widget.type}
          yTitle={widget.yTitle}
          series={widget.series}
          xCategories={widget.xCategories}
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
          Create Widget
        </Button>
      </Grid>
    </Grid>
  );
};

export default WidgetPage;
