import * as React from "react";
import { IModalContext, IWidgetContext } from "./types";

export const WidgetContext = React.createContext<IWidgetContext>({
  widgets: [],
  widgetData: [],
  filteredWidgets: [],
  isLoading: false,
  createNewWidget: () => null,
  deleteWidget: () => null,
  updateWidget: () => null,
  searchWidget: () => null,
  setWidgetData: () => null,
  setIsLoading: () => null,
});

export const ModalContext = React.createContext<IModalContext>({
  openCreate: false,
  openUpdate: false,
  setOpenCreate: () => null,
  setOpenUpdate: () => null,
});

export const useModalContext = () => {
  return React.useContext(ModalContext);
};

export const useWidgetContext = () => {
  return React.useContext(WidgetContext);
};
