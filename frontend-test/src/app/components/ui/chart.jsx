import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ChartComponent({ type, options }) {
  return (
    <HighchartsReact type={type} highcharts={Highcharts} options={options} />
  );
}
