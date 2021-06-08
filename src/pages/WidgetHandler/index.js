import React, { Component } from "react";
import { connect } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import nextId from "react-id-generator";
import PropTypes from "prop-types";

import {
  AiOutlineDotChart as BubbleIcon,
  FaChartArea,
  RiBarChartHorizontalFill,
} from "react-icons/all";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import withStyles from "@material-ui/styles/withStyles";
import {
  CloudUpload,
  Equalizer,
  GridOn,
  PieChart,
  Publish,
  Timeline,
} from "@material-ui/icons";

import DataFromAPI from "../../components/DataFromAPI";
import DataSheet from "../../components/DataSheet";
import styles from "./styles";
import theme from "../../theme";
import UploadFile from "../../components/UploadFile";

import { saveNewChart } from "../../redux/actions";
import {
  clone,
  seriesToSpreadsheet,
  spreadsheetToSeriesAndCategories,
} from "../../utils";

HC_more(Highcharts);

class WidgetHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "datasheet",
      datasheet: [],
      chartData: {
        id: nextId(),
        chart: { type: "spline" },
        title: "",
        xAxis: {
          categories: [],
          title: {
            text: "",
          },
        },
        yAxis: {
          title: {
            text: "",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{series.name}</b>: {point.percentage:.1f} %",
            },
          },
        },
      },
    };
    this.handleChangeInputData = this.handleChangeInputData.bind(this);
    this.handleChartType = this.handleChartType.bind(this);
    this.handleSpreadsheetToSeries = this.handleSpreadsheetToSeries.bind(this);
    this.handleInputDataForm = this.handleInputDataForm.bind(this);
    this.handleSeries = this.handleSeries.bind(this);
  }

  componentDidMount() {
    this.props.initialChartData &&
      this.setState({
        chartData: clone(this.props.initialChartData),
        datasheet: seriesToSpreadsheet(this.props.initialChartData.series),
      });
  }

  handleChangeInputData(event, nextView) {
    this.setState({ view: nextView });
  }

  handleInputDataForm() {
    switch (this.state.view) {
      case "file": {
        return (
          <UploadFile
            onUpload={(spreadsheet) => {
              this.handleSpreadsheetToSeries(spreadsheet);
              this.setState({ view: "datasheet" });
            }}
          />
        );
      }
      case "api": {
        return (
          <DataFromAPI
            onGetData={(series) => {
              this.handleCategories([]);
              this.handleSeries(series);
              this.setState({
                datasheet: seriesToSpreadsheet(series),
              });
            }}
          />
        );
      }
      default: {
        return (
          <DataSheet
            initialColumns={6}
            initialRows={15}
            initialData={
              this.state.chartData.xAxis.categories.length
                ? [
                    this.state.chartData.xAxis.categories,
                    ...this.state.datasheet,
                  ]
                : this.state.datasheet
            }
            exportData={this.handleSpreadsheetToSeries}
          />
        );
      }
    }
  }

  handleChartData(property) {
    this.setState((prevState) => {
      return {
        chartData: {
          ...prevState.chartData,
          ...property,
        },
      };
    });
  }

  handleChartType(event, chartType) {
    chartType &&
      this.handleChartData({
        chart: { type: chartType },
      });
  }

  handleSeries(series) {
    this.handleChartData({
      series: series,
    });
  }

  handleTitle(title) {
    this.handleChartData({
      title: title,
    });
  }

  handleYAxis(yAxis) {
    this.handleChartData({
      yAxis: {
        title: {
          text: yAxis,
        },
      },
    });
  }

  handleXAxis(xAxisProperty) {
    this.handleChartData({
      xAxis: {
        ...this.state.chartData.xAxis,
        ...xAxisProperty,
      },
    });
  }

  handleCategories(categories) {
    this.handleXAxis({
      categories: categories,
    });
  }

  handleXAxisTitle(xAxisTitle) {
    this.handleXAxis({
      title: {
        text: xAxisTitle,
      },
    });
  }

  handleSpreadsheetToSeries(spreadsheet) {
    this.setState({ datasheet: clone(spreadsheet) }, () => {
      let seriesAndCategories = spreadsheetToSeriesAndCategories(spreadsheet);
      this.handleSeries(seriesAndCategories.series);
      this.handleCategories(seriesAndCategories.categories);
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <>
            <TextField
              required
              variant={"outlined"}
              label={"Titulo"}
              placeholder={"Titulo"}
              helperText={"O titulo é obrigatório"}
              value={this.state.chartData.title}
              autoFocus={true}
              onChange={(e) => this.handleTitle(e.target.value)}
            />
            <TextField
              variant={"outlined"}
              label={"Titulo Eixo X"}
              placeholder={"Titulo Eixo X"}
              value={this.state.chartData.xAxis.title.text}
              onChange={(e) => this.handleXAxisTitle(e.target.value)}
            />
            <TextField
              variant={"outlined"}
              label={"Titulo Eixo Y"}
              placeholder={"Titulo Eixo Y"}
              value={this.state.chartData.yAxis.title.text}
              onChange={(e) => this.handleYAxis(e.target.value)}
            />
          </>
          <ToggleButtonGroup
            className={classes.inputDataTypeButtonsGroup}
            value={this.state.view}
            exclusive
            onChange={this.handleChangeInputData}
          >
            <ToggleButton value="datasheet">
              <GridOn className={classes.inputTypesIcons} />
              {"Inserir dados"}
            </ToggleButton>
            <ToggleButton value="file">
              <Publish className={classes.inputTypesIcons} />
              {"Importar arquivo"}
            </ToggleButton>
            <ToggleButton value="api">
              <CloudUpload className={classes.inputTypesIcons} />
              {"Importar de API"}
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className={classes.content}>
          <div className={classes.chartVisualization}>
            <ToggleButtonGroup
              className={classes.chartTypeButtonsGroup}
              orientation="vertical"
              value={this.state.chartData.chart.type}
              exclusive
              onChange={this.handleChartType}
            >
              <ToggleButton value="spline" className={classes.chartTypeButtons}>
                <Timeline className={classes.chartTypesIcons} />
              </ToggleButton>
              <ToggleButton value="column" className={classes.chartTypeButtons}>
                <Equalizer className={classes.chartTypesIcons} />
              </ToggleButton>
              <ToggleButton value="bar" className={classes.chartTypeButtons}>
                <RiBarChartHorizontalFill className={classes.chartTypesIcons} />
              </ToggleButton>
              <ToggleButton value="pie" className={classes.chartTypeButtons}>
                <PieChart className={classes.chartTypesIcons} />
              </ToggleButton>
              <ToggleButton value="bubble" className={classes.chartTypeButtons}>
                <BubbleIcon className={classes.chartTypesIcons} />
              </ToggleButton>
              <ToggleButton value="area" className={classes.chartTypeButtons}>
                <FaChartArea className={classes.chartTypesIcons} />
              </ToggleButton>
            </ToggleButtonGroup>
            <HighchartsReact
              highcharts={Highcharts}
              options={this.state.chartData}
            />
          </div>
          <div className={classes.inputData}>{this.handleInputDataForm()}</div>
        </div>
        <div className={classes.footer}>
          <Button
            className={classes.cancelButton}
            onClick={() => this.props.onClose()}
          >
            Cancelar
          </Button>
          <Button
            className={classes.saveButton}
            disabled={
              !(this.state.chartData.series && this.state.chartData.title)
            }
            onClick={() => {
              this.props.saveNewChart(this.state.chartData);
              this.props.onClose();
            }}
          >
            Salvar
          </Button>
        </div>
      </div>
    );
  }
}

WidgetHandler.propTypes = {
  saveNewChart: PropTypes.any,
  classes: PropTypes.object,
  initialChartData: PropTypes.object,
  onClose: PropTypes.func,
};

export default connect(null, { saveNewChart }, null, { forwardRef: true })(
  withStyles(styles(theme))(WidgetHandler)
);
