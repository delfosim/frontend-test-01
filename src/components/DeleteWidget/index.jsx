import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  Button, Dialog, DialogActions, DialogTitle,
} from '@material-ui/core';

import { deleteWidget } from '../../store/modules/widgets/actions';

const DeleteWidget = ({ widget, open, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWidget(widget.id));
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{`You want delete widget ${widget.name}?`}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose} color="default">
          Cancel
        </Button>
        <Button onClick={handleDelete} variant="contained" color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteWidget.propTypes = {
  widget: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

DeleteWidget.defaultProps = {
  widget: {},
  open: false,
  onClose: () => {},
};

export default DeleteWidget;
