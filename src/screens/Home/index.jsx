import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import { WidgetCard, DeleteWidget } from '../../components';

const HomePage = () => {
  const widgets = useSelector((state) => state.widgets);
  const history = useHistory();
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDelete = (id) => {
    setDeleteModal(id);
  };

  return (
    <Grid container>
      <Grid container item xs={12} direction="column" alignItems="center" spacing={2}>
        {widgets.length
          ? widgets.map((widget) => (
            <Grid container item key={widget.id} xs={10}>
              <WidgetCard
                title={widget.name}
                type={widget.type}
                yTitle={widget.yTitle}
                series={widget.series}
                xCategories={widget.xCategories}
                onDelete={() => handleDelete(widget.id)}
                onEdit={() => history.push(`/widget/${widget.id}`)}
              />
            </Grid>
          ))
          : (
            <Grid item className="no-data">
              <span>No data!</span>
              <span>Please, create a widget.</span>
            </Grid>
          )}
      </Grid>
      <DeleteWidget
        open={Boolean(deleteModal)}
        widget={widgets.filter((widget) => widget.id === deleteModal)[0]}
        onClose={() => setDeleteModal(null)}
      />
    </Grid>
  );
};

export default HomePage;
