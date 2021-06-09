import { WidgetData } from "../../components/types";

export interface IWidgetContext {
  widgets: WidgetData[];
  widgetData: WidgetData[];
  filteredWidgets: WidgetData[];
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setWidgetData: (widget: WidgetData[]) => void;
  deleteWidget: (widget: WidgetData) => void;
  createNewWidget: (widget: WidgetData) => void;
  updateWidget: (widget: WidgetData) => void;
  searchWidget: (widget: string) => void;
}

export interface IModalContext {
  openCreate: boolean;
  openUpdate: boolean;
  setOpenCreate: (state: boolean) => void;
  setOpenUpdate: (state: boolean) => void;
}

export const titleOptions = {
  align: "left" as Highcharts.AlignValue | undefined,
  style: {
    fontWeight: "600",
    fontSize: "1.7rem",
  },
};
