export interface ChartData {
  x: number;
  y: number;
  name: string;
}

export interface WidgetData {
  title: {
    text: string;
  };
  series: {
    type: string;
    data: ChartData[];
  }[];
}
