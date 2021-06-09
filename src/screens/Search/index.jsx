import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import { WidgetCard, DeleteWidget } from '../../components';

const SearchPage = () => {
  const widgets = useSelector((state) => state.widgets);
  const { name } = useParams();
  const history = useHistory();
  const [filtered, setFiltered] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    setFiltered(
      widgets.filter((widget) => widget.name.toLowerCase().includes(name.toLowerCase())),
    );
  }, [name, widgets]);

  const handleDelete = (id) => {
    setDeleteModal(id);
  };

  return (
    <Grid container>
      <Grid container item xs={12} direction="column" alignItems="center" spacing={2}>
        {filtered.length
          ? filtered.map((widget) => (
            <Grid container item key={widget.id} xs={11} justify="center">
              <WidgetCard
                title={widget.name}
                type={widget.type}
                yTitle={widget.yTitle}
                series={widget.series}
                xCategories={widget.xCategories}
                onDelete={handleDelete}
                onEdit={() => history.push(`/widget/${widget.id}`)}
              />
            </Grid>
          )) : (
            <div className="no-data">
              <span>No widget with that name!</span>
            </div>
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

export default SearchPage;
