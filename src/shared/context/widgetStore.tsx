import * as React from "react";
import { WidgetContext } from "./index";
import { WidgetData } from "../../components/types";

export const WidgetsStore: React.FC = ({ children }) => {
  const [widgets, setWidgets] = React.useState<WidgetData[]>([]);
  const [filteredWidgets, setFilteredWidgets] = React.useState<WidgetData[]>([]);
  const [widgetData, setWidgetData] = React.useState<WidgetData[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const hasWidgetSaved = (): void => {
    const widgets = localStorage.getItem("data");

    if (!widgets) return;

    let dataParsed = JSON.parse(widgets);
    setWidgets([...dataParsed]);
  };

  const createNewWidget = (widget: WidgetData) => {
    setWidgets([...widgets, widget]);
  };

  const deleteWidget = (widget: WidgetData) => {
    const index = widgets.indexOf(widget);
    const del = [...widgets.filter((_, idx) => idx !== index)];
    setWidgets(del);
    setFilteredWidgets([]);
  };

  const updateWidget = (widget: WidgetData) => {
    const index = widgets.indexOf(widgetData[0]);

    setWidgets((previous) => [
      ...previous.slice(0, index),
      widget,
      ...previous.slice(index + 1),
    ]);
    setFilteredWidgets([]);
  };

  const searchWidget = (widgetName: string) => {
    setIsLoading(true);

    if (widgetName === "") setFilteredWidgets([]);
    const data = widgets.filter((data) => data.title.text.toLowerCase().includes(widgetName));
    setFilteredWidgets(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  React.useEffect(() => {
    hasWidgetSaved();
  }, []);

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(widgets));
  }, [widgets]);

  return (
    <WidgetContext.Provider
      value={{
        widgets,
        widgetData,
        isLoading,
        filteredWidgets,
        deleteWidget,
        createNewWidget,
        updateWidget,
        searchWidget,
        setWidgetData,
        setIsLoading,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidgetContext = () => {
  return React.useContext(WidgetContext);
};
