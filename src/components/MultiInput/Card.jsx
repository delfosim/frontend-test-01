import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Chip, Grid } from '@material-ui/core';
import { useDrag, useDrop } from 'react-dnd';

import useStyles from './styles';

const Card = ({
  item, handleDelete, index, moveItem,
}) => {
  const ref = useRef(null);
  const classes = useStyles();

  const [{ handlerId }, drop] = useDrop({
    accept: 'item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(chip) {
      if (!ref.current) {
        return;
      }

      const dragIndex = chip.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveItem(dragIndex, hoverIndex);

      // eslint-disable-next-line no-param-reassign
      chip.index = index;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: () => ({ id: item.index, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <Grid
      item
    >
      <Chip
        ref={ref}
        style={{ opacity }}
        label={item.value}
        onDelete={() => handleDelete(item.index)}
        className={classes.item}
        data-handler-id={handlerId}
      />
    </Grid>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    index: PropTypes.number,
    value: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  moveItem: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Card;
