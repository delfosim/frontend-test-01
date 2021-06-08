import React from "react";
import Dropzone from "react-dropzone";
import parse from "csv-parse";
import PropTypes from "prop-types";
import withStyles from "@material-ui/styles/withStyles";

import {
  castFloat2DArray,
  objectTo2DArray,
  transpose2DArray,
} from "../../utils";

import theme from "../../theme";
import styles from "./styles";

const UploadFile = (props) => {
  const { classes } = props;
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <h2>Adicione ou arraste seu arquivo aqui</h2>;
    }
    if (isDragReject) {
      return (
        <h2 className={props.classes.errorMessage}>Arquivo não suportado</h2>
      );
    }
    return (
      <h2 className={props.classes.successMessage}>Solte seu arquivo aqui</h2>
    );
  };

  const drop = (files) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading failed");
      files[0].type === "application/json"
        ? props.onUpload(
            castFloat2DArray(objectTo2DArray(JSON.parse(event.target.result)))
          )
        : parse({ cast: true }, event.target.result, (err, array) =>
            props.onUpload(transpose2DArray(array))
          );
    };
    reader.readAsText(files[0]);
  };

  return (
    <div className={classes.root}>
      <Dropzone
        accept=".csv,text/csv,application/json"
        onDropAccepted={drop}
        className="form--dropzone"
        multiple={false}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <div className={classes.DropContainer} {...getRootProps()}>
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

UploadFile.propTypes = {
  onUpload: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles(theme))(UploadFile);
