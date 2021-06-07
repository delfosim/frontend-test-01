import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import { WidgetCard } from '../../components';

const HomePage = () => {
  const widgets = useSelector((state) => state.widgets);

  return (
    <Grid container direction="column">
      {widgets && widgets.map((widget, key) => (
        <Grid container item key={key} xs={12} justify="center">
          <WidgetCard
            title={widget.name}
            type={widget.type}
            yTitle={widget.yTitle}
            series={widget.series}
            xCategories={widget.xCategories}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
