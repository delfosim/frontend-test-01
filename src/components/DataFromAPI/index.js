import React, { Component } from "react";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";

import { GrBitcoin, RiVirusFill } from "react-icons/all";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/styles/withStyles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import { getBitcoinTrades, getCovid19TimeLine } from "../../services/api";
import styles from "./styles";
import { timelineRegionDeaths } from "../../APIDataHandling/covid19";
import theme from "../../theme";
import { Typography } from "@material-ui/core";

export class DataFromAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      expanded: false,
      covid19Api: {
        country: "Brazil",
        dateFrom: ((d) => new Date(d.setDate(d.getDate() - 7)))(new Date()),
        dateTo: ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date()),
      },
    };
  }
  handleChange(panel) {
    this.setState((prevState) => {
      return { expanded: panel !== prevState.expanded ? panel : false };
    });
  }

  setCovid19Api(newInput) {
    this.setState((prevState) => {
      return {
        covid19Api: {
          ...prevState.covid19Api,
          ...newInput,
        },
      };
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Accordion
          expanded={this.state.expanded === "panel1"}
          onChange={() => this.handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h1 className={classes.heading}>
              <RiVirusFill size={18} /> Covid-19 API
            </h1>
            <h2 className={classes.secondaryHeading}>
              Informações sobre a COVID-19
            </h2>
          </AccordionSummary>
          <AccordionDetails>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-between" direction={"column"}>
                <TextField
                  margin="normal"
                  id="country-name"
                  label="País (En)"
                  required
                  value={this.state.covid19Api.country}
                  onChange={(country) =>
                    this.setCovid19Api({ country: country.target.value })
                  }
                />
                <KeyboardDatePicker
                  disableToolbar
                  required
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline-date-from"
                  label="Data inicial"
                  onChange={(data) => this.setCovid19Api({ dateFrom: data })}
                  value={this.state.covid19Api.dateFrom}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardDatePicker
                  required
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline-date-to"
                  label="Data final"
                  onChange={(data) => this.setCovid19Api({ dateTo: data })}
                  value={this.state.covid19Api.dateTo}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <Button
                  className={classes.getButton}
                  onClick={() => {
                    this.setState({ loading: true });
                    getCovid19TimeLine(this.state.covid19Api)
                      .then((res) => {
                        this.props.onGetData(timelineRegionDeaths(res.data));
                        this.setState({ loading: false });
                      })
                      .catch((err) => {
                        console.log("-> err", err);
                        this.setState({ loading: false, error: true });
                      });
                  }}
                  disabled={
                    (!this.state.covid19Api.country.length &&
                      !this.state.covid19Api.dateFrom.length &&
                      !this.state.covid19Api.dateTo.length) ||
                    this.state.loading
                  }
                >
                  GET
                </Button>
              </Grid>
            </MuiPickersUtilsProvider>
          </AccordionDetails>
          {this.state.loading && <LinearProgress />}
          {this.state.error && (
            <Alert
              severity="error"
              onClose={() => this.setState({ error: false })}
            >
              <AlertTitle>Erro</AlertTitle>
              Não foi possivel concluir a requisição.
            </Alert>
          )}
        </Accordion>
        <Accordion
          expanded={this.state.expanded === "panel2"}
          onChange={() => this.handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <h1 className={classes.heading}>
              <GrBitcoin size={18} /> Bitcoin API
            </h1>
            <h2 className={classes.secondaryHeading}>
              Últimas 1000 negociações do Bitcoin
            </h2>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Esses dados não se adequam bem ao gráfico de pizza.
            </Typography>
            <Button
              className={classes.getButton}
              onClick={() => {
                this.setState({ loading: true });
                getBitcoinTrades()
                  .then((res) => {
                    this.props.onGetData(res);
                    this.setState({ loading: false });
                  })
                  .catch((err) => {
                    console.log("-> err", err);
                    this.setState({ loading: false, error: true });
                  });
              }}
            >
              GET
            </Button>
          </AccordionDetails>
          {this.state.loading && <LinearProgress />}
          {this.state.error && (
            <Alert
              severity="error"
              onClose={() => this.setState({ error: false })}
            >
              <AlertTitle>Erro</AlertTitle>
              Não foi possivel concluir a requisição.
            </Alert>
          )}
        </Accordion>
      </div>
    );
  }
}

DataFromAPI.propTypes = {
  classes: PropTypes.object,
  onGetData: PropTypes.func,
};

export default withStyles(styles(theme))(DataFromAPI);
