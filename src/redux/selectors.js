import { createSelector } from "reselect";

export const filterWidget = createSelector(
  (store) => store.charts,
  (store) => store.widgetFilter,

  (charts, widgetFilter) => {
    return charts.filter((chart) => chart.title.includes(widgetFilter));
  }
);
