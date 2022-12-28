import { Box } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { EditWidgetModal } from "../modals/editWidget";

export const Widgets = ({options}) => {

  return (
    <Box >
      <EditWidgetModal id={options.id}/>
        <HighchartsReact  highcharts={Highcharts} options={options} />
    </Box>
  );
};
