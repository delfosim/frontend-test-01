import React from 'react';
import { useHistory } from 'react-router-dom';

import { Fab } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

import useStyles from './styles';

const NewWidget = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Fab
      color="primary"
      aria-label="add"
      className={classes.fab}
      onClick={() => history.push('/create')}
    >
      <AddIcon />
    </Fab>
  );
};

export default NewWidget;
