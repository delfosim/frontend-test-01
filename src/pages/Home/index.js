import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Modal from "@material-ui/core/Modal";
import withStyles from "@material-ui/styles/withStyles";

import EmptyPage from "../../components/EmptyPage";
import Navbar from "../../components/Navbar";
import styles from "./styles";
import theme from "../../theme";
import Widget from "../../components/Widget";
import WidgetHandler from "../WidgetHandler";

import { filterWidget } from "../../redux/selectors";
import { setFilterWidget } from "../../redux/actions";

const Home = (props) => {
  const [openWidgetHandlerModal, setOpenWidgetHandlerModal] = useState(false);
  const [widgetToEdit, setWidgetToEdit] = useState();

  const { classes, widgets } = props;

  const handleWidgetHandlerModal = () => {
    setOpenWidgetHandlerModal(false);
    setWidgetToEdit(undefined);
  };

  return (
    <>
      <div className={classes.root}>
        <Navbar
          onSearch={(search) => props.setFilterWidget(search.target.value)}
        />
        <div className={classes.container}>
          <div className={classes.content}>
            {widgets.length ? (
              widgets.map((chart) => {
                return (
                  <Widget
                    key={chart.id}
                    chartData={chart}
                    editWidget={(widget) => setWidgetToEdit({ ...widget })}
                  />
                );
              })
            ) : (
              <EmptyPage />
            )}
          </div>
          <Fab
            className={classes.addWidget}
            color="primary"
            onClick={() => setOpenWidgetHandlerModal(true)}
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
      <Modal
        open={openWidgetHandlerModal || !!widgetToEdit}
        onClose={handleWidgetHandlerModal}
        className={classes.openChartModal}
      >
        <>
          <WidgetHandler
            onClose={handleWidgetHandlerModal}
            initialChartData={widgetToEdit}
          />
        </>
      </Modal>
    </>
  );
};

Home.propTypes = {
  widgets: PropTypes.any,
  setFilterWidget: PropTypes.any,
  classes: PropTypes.object,
};

function mapStateToProps(store) {
  return {
    widgets: filterWidget(store),
    widgetsF: store.widgetFilter,
  };
}

export default connect(mapStateToProps, { setFilterWidget: setFilterWidget })(
  withStyles(styles(theme))(withRouter(Home))
);
