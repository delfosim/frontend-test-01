import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import { WidgetCard } from '../../components';

const SearchPage = () => {
  const widgets = useSelector((state) => state.widgets);
  const { name } = useParams();
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    setFiltered(
      widgets.filter((widget) => widget.name.toLowerCase().includes(name.toLowerCase())),
    );
  }, [name, widgets]);

  return (
    <Grid container direction="column">
      {filtered && filtered.map((widget) => (
        <Grid container item key={widget.id} xs={12} justify="center">
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

export default SearchPage;
