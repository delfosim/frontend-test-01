import React from "react";
import PropTypes from "prop-types";
import { AiOutlineBarChart } from "react-icons/all";

import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import { styles } from "./styles";
import theme from "../../theme";

const EmptyPage = (props) => (
  <div className={props.classes.container}>
    <AiOutlineBarChart size={"100"} color={theme.palette.secondary.light} />
    <Typography align="center">Não há gráficos a serem exibidos</Typography>
  </div>
);

EmptyPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(EmptyPage);
