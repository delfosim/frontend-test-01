import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import { WidgetCard, DeleteWidget } from '../../components';

const SearchPage = () => {
  const widgets = useSelector((state) => state.widgets);
  const { name } = useParams();
  const history = useHistory();
  const [filtered, setFiltered] = useState();
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
    <>
      <Grid container direction="column">
        {filtered && filtered.map((widget) => (
          <Grid container item key={widget.id} xs={12} justify="center">
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
        ))}
      </Grid>
      <DeleteWidget
        open={Boolean(deleteModal)}
        widget={widgets.filter((widget) => widget.id === deleteModal)[0]}
        onClose={() => setDeleteModal(null)}
      />
    </>
  );
};

export default SearchPage;
