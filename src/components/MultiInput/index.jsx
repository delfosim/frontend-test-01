import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid } from '@material-ui/core';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import Card from './Card';
import useStyles from './styles';

const MultiInput = ({
  values, setValues, onlyNumbers, label, name,
}) => {
  const classes = useStyles();
  const [items, setItems] = useState(values.map((value, index) => ({ value, index })));
  const [input, setInput] = useState('');

  const handleDelete = (index) => {
    let copy = [...items];
    copy = copy.filter((item) => item.index !== index);

    setItems(copy);
    setValues(copy.map((item) => (onlyNumbers ? parseFloat(item.value) : item.value)));
  };

  const handlePress = (event) => {
    if (event.key === 'Enter' && event.target.value) {
      const copy = [...items];
      copy.push({
        value: event.target.value,
        index: ((items.pop()?.index || 0) + 1),
      });

      setItems(copy);
      setInput('');
      setValues(copy.map((item) => (onlyNumbers ? parseFloat(item.value) : item.value)));
    }
  };

  const moveItem = useCallback((dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    const copy = update(items, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragItem],
      ],
    });

    setItems(copy);
    setValues(copy.map((item) => (onlyNumbers ? parseFloat(item.value) : item.value)));
  }, [items]);

  return (
    <Grid container direction="column" data-cy={`multi-input-${name}`}>
      <Grid item>
        <TextField
          name={name}
          type={onlyNumbers ? 'number' : 'text'}
          label={label}
          value={input}
          fullWidth
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handlePress}
        />
      </Grid>
      <Grid container item spacing={1} className={classes.items} data-cy="multi-input-items">
        <DndProvider backend={HTML5Backend}>
          {items.map((item, index) => (
            <Card
              key={index}
              item={item}
              index={index}
              moveItem={moveItem}
              handleDelete={handleDelete}
            />
          ))}
        </DndProvider>
      </Grid>
    </Grid>
  );
};

MultiInput.propTypes = {
  values: PropTypes.array,
  setValues: PropTypes.func,
  onlyNumbers: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
};

MultiInput.defaultProps = {
  values: [],
  setValues: () => {},
  onlyNumbers: false,
  label: '',
  name: '',
};

export default MultiInput;
