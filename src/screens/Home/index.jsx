import React from 'react';

import { Grid } from '@material-ui/core';

import { WidgetCard } from '../../components';

const HomePage = () => (
  <Grid container justify="center">
    <WidgetCard
      type="spline"
      yText="Teste 123"
      series={[
        {
          name: 'Teste',
          data: [1, 2, 1, 4, 3, 6],
        },
        {
          name: 'Teste 2',
          data: [4, 2, 12, 3, 2, 0],
        },
      ]}
    />
  </Grid>
);

export default HomePage;
