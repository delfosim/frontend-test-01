import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Grid, Button, Fab,
} from '@material-ui/core';
import {
  Save as SaveIcon,
} from '@material-ui/icons';
import { WidgetCard, FormWidget, WidgetTour } from '../../components';

import useStyles from './styles';

import { addNewWidget } from '../../store/modules/widgets/actions';

const WidgetPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [widget, setWidget] = useState({});
  const [isTourOpen, setIsTourOpen] = useState(!localStorage.getItem('createWidgetVisited'));

  useEffect(() => {
    localStorage.setItem('createWidgetVisited', true);
  }, []);

  const handleSave = () => {
    dispatch(addNewWidget(widget));
    history.push('/');
  };

  return (
    <Grid container alignItems="center" direction="column">
      <Grid container item justify="center" data-tut="widget-form">
        <FormWidget
          onChange={setWidget}
          preview={(
            <WidgetCard
              title={widget.name}
              type={widget.type}
              xTitle={widget.xTitle}
              yTitle={widget.yTitle}
              series={widget.series}
              xCategories={widget.xCategories}
              disableOptions
            />
          )}
        />
      </Grid>
      <Grid item container justify="flex-start" xs={11}>
        <Grid item container xs={12} md={4} lg={3} justify="center">
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            className={classes.save}
            onClick={handleSave}
            data-tut="widget-button-save"
          >
            Create Widget
          </Button>
        </Grid>
      </Grid>
      <Fab
        data-tut="widget-info"
        className={classes.info}
        onClick={() => setIsTourOpen(true)}
      >
        ?
      </Fab>
      <WidgetTour
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />
    </Grid>
  );
};

export default WidgetPage;
