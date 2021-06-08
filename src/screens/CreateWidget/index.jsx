import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Tour from 'reactour';

import {
  Grid, Button, Fab,
} from '@material-ui/core';
import {
  Save as SaveIcon,
} from '@material-ui/icons';
import { WidgetCard, FormWidget } from '../../components';

import useStyles from './styles';
import tourConfig from './tourConfig';

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

  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);

  return (
    <Grid container alignItems="center" direction="column">
      <Grid container item justify="center" data-tut="widget-form">
        <FormWidget onChange={setWidget} />
      </Grid>
      <Grid
        xs={11}
        item
        container
        direction="column"
        alignItems="center"
        data-tut="widget-preview"
      >
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
          data-tut="widget-button-save"
        >
          Create Widget
        </Button>
      </Grid>
      <Fab
        className={classes.info}
        onClick={() => setIsTourOpen(true)}
      >
        ?
      </Fab>
      <Tour
        isOpen={isTourOpen}
        steps={tourConfig}
        rounded={0}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        onRequestClose={() => setIsTourOpen(false)}
      />
    </Grid>
  );
};

export default WidgetPage;
