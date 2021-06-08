/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';

import Image from '../../assets/errors/404.png';

const NotFoundPage = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.notFound}>
      <img
        src={Image}
        alt="Page Not Found"
        onClick={() => history.push('/')}
      />
    </div>
  );
};

export default NotFoundPage;
