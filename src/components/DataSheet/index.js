import React, { useEffect, useRef, useState } from "react";
import Spreadsheet from "react-spreadsheet";
import PropTypes from "prop-types";

import Add from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";
import theme from "../../theme";
import { clone, isStringColumn, transpose2DArray } from "../../utils";

const DataSheet = (props) => {
  const isFirstInitialData = useRef(true);
  const [data, setData] = useState([[{ value: "" }]]);
  const { classes } = props;

  useEffect(() => {
    if (props.initialData?.length && isFirstInitialData.current) {
      setData(clone(importData(props.initialData)));
      isFirstInitialData.current = false;
    }
  }, [props.initialData]);

  useEffect(() => {
    fillInitialColumns();
    fillInitialRows();
  }, []);

  const fillInitialColumns = () => {
    if (props.initialColumns && props.initialColumns > 1) {
      setData((prevState) => [
        ...prevState.map((row) => {
          for (let i = 1; i < props.initialColumns; i++) {
            row.push({ value: "" });
          }
          return row;
        }),
      ]);
    }
  };
  const fillInitialRows = () => {
    if (props.initialRows && props.initialRows > 1) {
      let rows = [];
      for (let i = 1; i < props.initialRows; i++) {
        rows.push([{ value: "" }]);
      }
      setData((prevState) => [...prevState, ...rows]);
    }
  };

  const importData = (arrayColumns) => {
    isStringColumn(arrayColumns[0]) &&
      isNaN(arrayColumns[1][0]) &&
      arrayColumns[0].splice(0, 0, "");

    let arrayRows = transpose2DArray(arrayColumns);
    return arrayRows.map((row) =>
      row.map((item) => {
        return { value: item };
      })
    );
  };

  const exportData = (data) => {
    const series = [...Array(data[0].length).keys()]
      .map((idxColumn) =>
        data
          .map(
            (line) =>
              line[idxColumn] !== undefined &&
              /*categorias vem na primeira coluna*/
              line[idxColumn].value !== "" &&
              (isNaN(line[idxColumn].value)
                ? line[idxColumn].value
                : parseFloat(line[idxColumn].value))
          )
          .filter((value) => value !== false)
      )
      .filter((line) => line.length);
    props.exportData && series.length && props.exportData(series);
  };

  const handleAddColumn = () => {
    setData((prevState) => [
      ...prevState.map((row) => {
        console.log("-> row", row);
        row.push({ value: "" });
        return row;
      }),
    ]);
  };

  const handleAddRow = () => {
    setData((prevState) => [...prevState, [{ value: "" }]]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Spreadsheet
          data={data}
          onActivate={() => (isFirstInitialData.current = false)}
          onChange={(data) => {
            setData(data);
            exportData(data);
          }}
        />
        <Button className={classes.addColumnButton} onClick={handleAddColumn}>
          <Add />
        </Button>
      </div>
      <Button className={classes.addRowButton} onClick={handleAddRow}>
        <Add />
      </Button>
    </div>
  );
};

DataSheet.propTypes = {
  classes: PropTypes.object,
  initialColumns: PropTypes.number,
  initialRows: PropTypes.number,
  initialData: PropTypes.array,
  exportData: PropTypes.func,
};

export default withStyles(styles(theme))(DataSheet);
