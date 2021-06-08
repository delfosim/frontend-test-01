export const DELETE_WIDGET = "DELETE_WIDGET";
export const SAVE_NEW_CHART = "SAVE_NEW_CHART";
export const SET_FILTER_WIDGET = "SET_FILTER_WIDGET";

export const saveNewChart = (value) => ({
  type: SAVE_NEW_CHART,
  payload: value,
});

export const deleteWidget = (value) => ({
  type: DELETE_WIDGET,
  payload: value,
});

export const setFilterWidget = (value) => ({
  type: SET_FILTER_WIDGET,
  payload: value,
});
