import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Grid, Fab,
} from '@material-ui/core';
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
          saveAction={handleSave}
          saveTitle="Create Widget"
        />
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
