import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Grid, Button,
} from '@material-ui/core';
import {
  Save as SaveIcon,
} from '@material-ui/icons';
import { WidgetCard, FormWidget } from '../../components';

import useStyles from './styles';

import { updateWidget } from '../../store/modules/widgets/actions';

const EditWidgetPage = () => {
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const widgets = useSelector((state) => state.widgets);

  const [widget, setWidget] = useState({});

  const handleSave = () => {
    dispatch(updateWidget(id, widget));
    history.push('/');
  };

  return (
    <Grid container alignItems="center" direction="column">
      <FormWidget
        widget={widgets.filter((w) => w.id === id)[0]}
        onChange={setWidget}
        preview={(
          <WidgetCard
            title={widget.name}
            type={widget.type}
            yTitle={widget.yTitle}
            series={widget.series}
            xCategories={widget.xCategories}
            disableOptions
          />
        )}
      />
      <Grid xs={12} item container justify="center">
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          className={classes.save}
          onClick={handleSave}
        >
          Update Widget
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditWidgetPage;
