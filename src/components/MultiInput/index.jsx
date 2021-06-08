import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Chip, TextField, Grid } from '@material-ui/core';

import useStyles from './styles';

const MultiInput = ({
  values, setValues, onlyNumbers, label,
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

  return (
    <Grid container direction="column">
      <Grid item>
        <TextField
          type={onlyNumbers ? 'number' : 'text'}
          label={label}
          value={input}
          fullWidth
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handlePress}
        />
      </Grid>
      <Grid container item spacing={1} className={classes.items}>
        {items.map((item, index) => (
          <Grid item key={index}>
            <Chip label={item.value} onDelete={() => handleDelete(item.index)} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

MultiInput.propTypes = {
  values: PropTypes.array,
  setValues: PropTypes.func,
  onlyNumbers: PropTypes.bool,
  label: PropTypes.string,
};

MultiInput.defaultProps = {
  values: [],
  setValues: () => {},
  onlyNumbers: false,
  label: '',
};

export default MultiInput;
