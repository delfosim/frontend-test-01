import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Grid, Fab,
} from '@material-ui/core';
import { WidgetCard, FormWidget, WidgetTour } from '../../components';

import useStyles from './styles';

import { updateWidget } from '../../store/modules/widgets/actions';

const EditWidgetPage = () => {
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const widgets = useSelector((state) => state.widgets);

  const [widget, setWidget] = useState({});
  const [isTourOpen, setIsTourOpen] = useState(!localStorage.getItem('createWidgetVisited'));

  const handleSave = () => {
    dispatch(updateWidget(id, widget));
    history.push('/');
  };

  useEffect(() => {
    localStorage.setItem('updateWidgetVisited', true);
  }, []);

  return (
    <Grid container alignItems="center" direction="column">
      <FormWidget
        widget={widgets.filter((w) => w.id === id)[0]}
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
        saveTitle="Update Widget"
      />
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

export default EditWidgetPage;
