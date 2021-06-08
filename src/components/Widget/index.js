import React, { useState } from "react";
import { connect } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import { deleteWidget } from "../../redux/actions";
import MenuButton from "../MenuButton";
import styles from "./styles";
import theme from "../../theme";

const Widget = (props) => {
  const { classes, chartData } = props;
  const [deleteWidget, setDeleteWidget] = useState(false);
  const title = chartData.title;

  const handleDeleteWidget = () => {
    props.deleteWidget(chartData.id);
    setDeleteWidget(false);
  };

  const handleEditWidget = () => {
    props.editWidget(chartData);
  };

  const handleMenuSelect = (choice) => {
    switch (choice) {
      case "Excluir":
        setDeleteWidget(true);
        break;
      case "Editar":
        handleEditWidget();
        break;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography>{title}</Typography>
        <MenuButton
          options={["Excluir", "Editar"]}
          onSelect={handleMenuSelect}
        />
      </div>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
      <Dialog
        open={deleteWidget}
        onClose={handleDeleteWidget}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deseja excluir este widget?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta ação não pode ser desfeita
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteWidget(false)} color="primary">
            CANCELAR
          </Button>
          <Button onClick={handleDeleteWidget} color="primary" autoFocus>
            CONFIRMAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Widget.propTypes = {
  chartData: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  deleteWidget: PropTypes.func,
  editWidget: PropTypes.func,
};

export default connect(null, { deleteWidget })(
  withStyles(styles(theme))(Widget)
);
