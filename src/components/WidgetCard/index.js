import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ToogleButton from "../ToogleButton";
import "./index.css";

function WidgetCard({ widget, onClickEdit, onClickRemove }) {
  if (!widget) return null;

  const options = {
    series: [
      {
        data: widget.series || [],
      },
    ],
    legend: {
      enabled: false,
    },
    yAxis: {
      title: {
        enabled: false,
      },
    },
    title: {
      text: "",
    },
    chart: {
      height: 250,
    },
  };

  return (
    <Card>
      <Card.Header>
        {widget.title}
        <Dropdown alignRight>
          <Dropdown.Toggle as={ToogleButton}></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onClickEdit(widget.id)}>
              Edit
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onClickRemove(widget.id)}>
              Remove
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>
      <Card.Body>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Card.Body>
    </Card>
  );
}

export default WidgetCard;
