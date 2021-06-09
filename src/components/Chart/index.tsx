import * as React from "react";
import * as Highcharts from "highcharts";
import More from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import { Card, CardContent, Icon, IconButton, Menu, MenuItem } from "@material-ui/core";

import { useStyle } from "./style";
import { useWidgetContext } from "../../shared/context/widgetStore";
import { useModalContext } from "../../shared/context";
import { WidgetData } from "../types";

type ChartProps = {
  data: WidgetData;
  index: number;
};

const Chart: React.FC<ChartProps> = ({ data, index }) => {
  const [element, setElement] = React.useState<HTMLElement | null>(null);
  const classes = useStyle();
  const { setWidgetData } = useWidgetContext();

  const { deleteWidget } = useWidgetContext();
  const { setOpenUpdate } = useModalContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setElement(event.currentTarget);
  };

  const handleClose = () => {
    setElement(null);
  };

  const handleDeleteWidget = (index: number, data: WidgetData) => {
    deleteWidget(data);
    handleClose();
  };

  const handleUpdateWidget = (index: number, data: WidgetData) => {
    setWidgetData([data]);

    setOpenUpdate(true);
    handleClose();
  };

  return (
    <>
      <Card elevation={8} classes={{ root: classes.card }} key={index}>
        <CardContent classes={{ root: classes.cardContent }}>
          <HighchartsReact
            highcharts={More(Highcharts)}
            options={data as Highcharts.Options}
            constructorType="chart"
          />
          <IconButton classes={{ root: classes.dropdownIcon }} onClick={handleClick}>
            <Icon>more_vert</Icon>
          </IconButton>
          <Menu anchorEl={element} open={Boolean(element)} keepMounted onClose={handleClose}>
            <MenuItem onClick={() => handleUpdateWidget(index, data)}>Editar Widget</MenuItem>
            <MenuItem onClick={() => handleDeleteWidget(index, data)}>Deletar Widget</MenuItem>
          </Menu>
        </CardContent>
      </Card>
    </>
  );
};

export default Chart;
